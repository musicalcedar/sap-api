import { TokenService } from '../../../domain/services/TokenService';
import { RefreshTokenRepository } from '../../../domain/repositories/RefreshTokenRepository';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { config } from '../../../config';
import { getExpirationSeconds } from '../../../utils/getExpirationSeconds';

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
  // 1. Busca el refresh token en la BD
  const validRefreshToken = await refreshTokenRepository.findValid(refreshToken);
  if (!validRefreshToken) throw new Error('Refresh token inválido o expirado');

  // 2. Verifica la firma JWT
  let payload;
  try {
    payload = await tokenService.verifyRefreshToken(refreshToken);
  } catch {
    throw new Error('Refresh token corrupto o alterado');
  }

  // 3. Busca el usuario
  const user = await userRepository.getUserById(validRefreshToken.userId);
  if (!user) throw new Error('Usuario no encontrado');

  // 4. Genera nuevos tokens
  const tokens = await tokenService.generateTokenPair({
    sub: user.id,
    username: user.username,
    role: user.role,
  });

  // 5. Guarda el nuevo refresh token y revoca el anterior
  await refreshTokenRepository.create({
    token: tokens.refreshToken,
    userId: user.id,
    expiresAt: new Date(Date.now() + getExpirationSeconds(config.JWT_REFRESH_EXPIRES_IN) * 1000),
  });
  await refreshTokenRepository.revoke(refreshToken);

  // 6. Devuelve los nuevos tokens y el usuario (sin password)
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
