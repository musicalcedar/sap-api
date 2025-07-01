import { Request, Response } from 'express';
import { joseTokenService } from '../../../infrastructure/auth/joseTokenService';
import { login as loginUseCase } from '../../../application/use-cases/auth/login';

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const user = req.user as import('../../../domain/entities/user').User;
      if (!user) {
        res.status(401).json({ error: 'Usuario no autenticado' });
        return;
      }

      const result = await loginUseCase(user, joseTokenService);

      res.json(result);
    } catch (error) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  },
};
