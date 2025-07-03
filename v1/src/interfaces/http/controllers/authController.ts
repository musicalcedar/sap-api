import { Request, Response, NextFunction } from 'express';
import { joseTokenService } from '../../../infrastructure/auth/joseTokenService';
import { login as loginUseCase } from '../../../application/use-cases/auth/login';
import { refreshToken as refreshTokenUseCase } from '../../../application/use-cases/auth/refreshToken';
import { prismaRefreshTokenRepository } from '../../../infrastructure/prisma/prismaRefreshToken';
import { prismaUserRepository } from '../../../infrastructure/prisma/prismaUserRepository';
import Boom from '@hapi/boom';

export const authController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as import('../../../domain/entities/user').User;
      if (!user) {
        next(Boom.unauthorized('Usuario no autenticado'));
        return;
      }

      const result = await loginUseCase(user, joseTokenService, prismaRefreshTokenRepository);

      res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.body.refreshToken;
      if (!refreshToken) {
        next(Boom.unauthorized('Token de refresco no proporcionado'));
        return;
      }

      const result = await refreshTokenUseCase({
        refreshToken,
        tokenService: joseTokenService,
        refreshTokenRepository: prismaRefreshTokenRepository,
        userRepository: prismaUserRepository,
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};
