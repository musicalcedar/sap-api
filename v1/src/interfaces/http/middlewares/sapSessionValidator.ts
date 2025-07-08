import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { getSessionValidator } from '../../../composition';

export const sapSessionValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateSession = getSessionValidator();
    const session = await validateSession();
    if (!session) {
      return next(Boom.unauthorized('Sesión SAP no autenticada'));
    }
    req.cookies.session = session;
    next();
  } catch (error) {
    next(error);
  }
};
