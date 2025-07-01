import { Request, Response } from 'express';
import { login } from '../../../application/use-cases/auth/login';
import { prismaUserRepository } from '../../../infrastructure/prisma/prismaUserRepository';
import { joseTokenService } from '../../../infrastructure/auth/joseTokenService';

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const result = await login({ username, password }, prismaUserRepository, joseTokenService);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  },
};
