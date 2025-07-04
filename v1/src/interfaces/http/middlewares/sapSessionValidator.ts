import { Request, Response, NextFunction } from 'express';
import { sessionManager } from '../../../infrastructure/sap/sessionManager';
import Boom from '@hapi/boom';

export const sapSessionValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = await sessionManager.validateSession('shared-sap-session');
    if (!session) {
      return next(Boom.unauthorized('Sesión SAP no autenticada'));
    }
    req.cookies.session = session;
    next();
  } catch (error) {
    next(error);
  }
};
