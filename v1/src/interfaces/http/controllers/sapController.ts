import { Request, Response, NextFunction } from 'express';
import { composeLoginSapSessionUseCase } from '../../../composition';
import { sapProductAdapter } from '../../../infrastructure/sap/sapProductAdapter';
import { mapSapItemToDto } from '../../../infrastructure/sap/mappers/itemMapper';

export const sapController = {
  async loginSapSession(req: Request, res: Response, next: NextFunction) {
    try {
      const loginSapSessionUseCase = composeLoginSapSessionUseCase();
      const session = await loginSapSessionUseCase();

      res.json({ message: 'Sesión SAP iniciada correctamente', session });
    } catch (error) {
      next(error);
    }
  },
  async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const top = Number(req.query.top) || 20;
      const skip = Number(req.query.skip) || 0;

      const items = await sapProductAdapter.getItems(session, top, skip);
      const mappedItems = items.map(mapSapItemToDto);

      res.json(mappedItems);
    } catch (error) {
      next(error);
    }
  },
};
