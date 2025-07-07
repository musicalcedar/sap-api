import { login } from '../application/use-cases/auth/login';
import { User } from '../domain/entities/user';
import { refreshToken } from '../application/use-cases/auth/refreshToken';
import { joseTokenService } from '../infrastructure/auth/joseTokenService';
import { prismaRefreshTokenRepository } from '../infrastructure/prisma/prismaRefreshToken';
import { prismaUserRepository } from '../infrastructure/prisma/prismaUserRepository';

export const composeLoginUseCase = () => {
  return (user: User) => login(user, joseTokenService, prismaRefreshTokenRepository);
};

export const composeRefreshTokenUseCase = () => {
  return ({ refreshToken: token }: { refreshToken: string }) =>
    refreshToken({
      refreshToken: token,
      tokenService: joseTokenService,
      refreshTokenRepository: prismaRefreshTokenRepository,
      userRepository: prismaUserRepository,
    });
};
