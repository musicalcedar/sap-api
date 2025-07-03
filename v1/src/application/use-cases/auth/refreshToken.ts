import { TokenService } from '../../../domain/services/TokenService';
import { RefreshTokenRepository } from '../../../domain/repositories/RefreshTokenRepository';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { config } from '../../../config';
import { getExpirationSeconds } from '../../../utils/getExpirationSeconds';
import Boom from '@hapi/boom';

export const refreshToken = async ({
  refreshToken,
  tokenService,
  refreshTokenRepository,
  userRepository,
}: {
  refreshToken: string;
  tokenService: TokenService;
  refreshTokenRepository: RefreshTokenRepository;
  userRepository: UserRepository;
}) => {
  const validRefreshToken = await refreshTokenRepository.findValid(refreshToken);
  if (!validRefreshToken) throw Boom.unauthorized('Refresh token inválido o expirado');

  try {
    await tokenService.verifyRefreshToken(refreshToken);
  } catch {
    throw Boom.unauthorized('Refresh token corrupto o alterado');
  }

  const user = await userRepository.getUserById(validRefreshToken.userId);
  if (!user) throw Boom.notFound('Usuario no encontrado');

  const tokens = await tokenService.generateTokenPair({
    sub: user.id,
    username: user.username,
    role: user.role,
  });

  if (!tokens) throw Boom.badImplementation('Error al generar tokens');

  await refreshTokenRepository.create({
    token: tokens.refreshToken,
    userId: user.id,
    expiresAt: new Date(Date.now() + getExpirationSeconds(config.JWT_REFRESH_EXPIRES_IN) * 1000),
  });

  await refreshTokenRepository.revoke(refreshToken);

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
