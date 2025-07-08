import { Request, Response, NextFunction } from 'express';
import { composeLoginSapSessionUseCase } from '../../../composition';
import { sapProductAdapter } from '../../../infrastructure/sap/adapters/sapProductAdapter';
import { mapSapItemToDto } from '../../../infrastructure/sap/mappers/itemMapper';
import { sapBusinessPartnerAdapter } from '../../../infrastructure/sap/adapters/sapBusinessPartnerAdapter';
import { mapSapBusinessPartnerToDto } from '../../../infrastructure/sap/mappers/businessPartnerMapper';

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

  async getBussinessPartner(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const top = Number(req.query.top) || 20;
      const skip = Number(req.query.skip) || 0;
      const filter = req.query.filter as string | undefined;

      const businessPartners = await sapBusinessPartnerAdapter.getBusinessPartner(
        session,
        top,
        skip,
        filter
      );

      const mappedBusinessPartners = businessPartners.map(mapSapBusinessPartnerToDto);

      res.json(mappedBusinessPartners);
    } catch (error) {
      next(error);
    }
  },

  async getBusinessPartnerByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const { code } = req.params;

      const businessPartner = await sapBusinessPartnerAdapter.getBusinessPartnerByCode(
        session,
        code
      );

      const mappedBusinessPartner = mapSapBusinessPartnerToDto(businessPartner);
      res.json(mappedBusinessPartner);
    } catch (error) {
      next(error);
    }
  },
};
