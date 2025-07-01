import { Request, Response } from 'express';
import { joseTokenService } from '../../../infrastructure/auth/joseTokenService';

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const user = req.user as import('../../../domain/entities/user').User;
      if (!user) {
        res.status(401).json({ error: 'Usuario no autenticado' });
        return;
      }
      const tokens = await joseTokenService.generateTokenPair({
        sub: user.id,
        username: user.username,
        role: user.role,
      });
      const { password, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword, tokens });
    } catch (error) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  },
};
