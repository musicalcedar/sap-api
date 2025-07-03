import { Request, Response, NextFunction } from 'express';
import { loginSapSession } from '../../../application/use-cases/sap/loginSapSession';
import { sessionManager } from '../../../infrastructure/sap/sessionManager';
import { sapAuthService } from '../../../infrastructure/sap/sapAuthService';
import { User } from '../../../domain/entities/user';
import { config } from '../../../config';
import Boom from '@hapi/boom';

export const sapController = {
  async loginSapSession(req: Request, res: Response, next: NextFunction) {
    try {
      // Solo verifica que el usuario esté autenticado en TU API
      /* const user = req.user as User;
      if (!user?.id) {
        return next(Boom.unauthorized('Usuario no autenticado'));
      } */

      // Obtén las credenciales SAP desde config/env, NO del body
      const credentials = {
        CompanyDB: config.SAP_COMPANY_DB,
        UserName: config.SAP_USERNAME,
        Password: config.SAP_PASSWORD,
      };

      const session = await loginSapSession(
        'shared-sap-session',
        credentials,
        sessionManager,
        sapAuthService
      );

      res.json({ message: 'Sesión SAP iniciada correctamente', session });
    } catch (error) {
      next(error);
    }
  },
};
