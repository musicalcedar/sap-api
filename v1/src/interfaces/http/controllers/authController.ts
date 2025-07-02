import { Request, Response } from 'express';
import { joseTokenService } from '../../../infrastructure/auth/joseTokenService';
import { login as loginUseCase } from '../../../application/use-cases/auth/login';
import { refreshToken as refreshTokenUseCase } from '../../../application/use-cases/auth/refreshToken';
import { prismaRefreshTokenRepository } from '../../../infrastructure/prisma/prismaRefreshToken';
import { prismaUserRepository } from '../../../infrastructure/prisma/prismaUserRepository';

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const user = req.user as import('../../../domain/entities/user').User;
      if (!user) {
        res.status(401).json({ error: 'Usuario no autenticado' });
        return;
      }

      const result = await loginUseCase(user, joseTokenService, prismaRefreshTokenRepository);

      res.json(result);
    } catch (error) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  },

  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = req.body.refreshToken;
      if (!refreshToken) {
        res.status(401).json({ error: 'Token de refresco no proporcionado' });
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
      res.status(401).json({ error: 'Token de refresco inválido' });
    }
  },
};
