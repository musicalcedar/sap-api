import { TokenService } from '../../../domain/services/TokenService';
import { TokenPair } from '../../../domain/entities/token';
import { User } from '../../../domain/entities/user';
import { RefreshTokenRepository } from '../../../domain/repositories/RefreshTokenRepository';
import { config } from '../../../config';
import { getExpirationSeconds } from '../../../utils/getExpirationSeconds';
import Boom from '@hapi/boom';

type LoginResponse = {
  user: Omit<User, 'password'>;
  tokens: TokenPair;
};

export const login = async (
  user: User,
  tokenService: TokenService,
  refreshTokenRepository: RefreshTokenRepository
): Promise<LoginResponse> => {
  const tokens = await tokenService.generateTokenPair({
    sub: user.id,
    username: user.username,
    role: user.role,
  });

  if (!tokens) Boom.badImplementation('Error al generar tokens');

  await refreshTokenRepository.create({
    token: tokens.refreshToken,
    userId: user.id,
    expiresAt: new Date(Date.now() + getExpirationSeconds(config.JWT_REFRESH_EXPIRES_IN) * 1000),
  });

  return {
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    tokens,
  };
};
