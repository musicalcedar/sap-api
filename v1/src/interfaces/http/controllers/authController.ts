import { Request, Response, NextFunction } from 'express';
import { composeLoginUseCase, composeRefreshTokenUseCase } from '../../../composition';
import Boom from '@hapi/boom';

export const authController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as import('../../../domain/entities/user').User;
      if (!user) {
        next(Boom.unauthorized('Usuario no autenticado'));
        return;
      }

      const loginUseCase = composeLoginUseCase();
      const result = await loginUseCase(user);

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

      const refreshTokenUseCase = composeRefreshTokenUseCase();
      const result = await refreshTokenUseCase({ refreshToken });

      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};
