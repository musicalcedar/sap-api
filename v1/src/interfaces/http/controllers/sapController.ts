import { Request, Response, NextFunction } from 'express';
import {
  composeLoginSapSessionUseCase,
  composeGetItemsUseCase,
  composeGetBusinessPartnersUseCase,
  composeGetBusinessPartnerByCodeUseCase,
  composeCreateBusinessPartnerUseCase,
} from '../../../composition';
import { mapItemToDto } from '../dto/SapItemResponseDto';
import { mapBusinessPartnerToDto } from '../dto/SapBusinessPartnerResponseDto';

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

      const getItemsUseCase = composeGetItemsUseCase();
      const items = await getItemsUseCase(session, top, skip);

      const mappedItems = items.map(mapItemToDto);

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

      const getBusinessPartnersUseCase = composeGetBusinessPartnersUseCase();
      const businessPartners = await getBusinessPartnersUseCase(session, top, skip, filter);

      const mappedBusinessPartners = businessPartners.map(mapBusinessPartnerToDto);

      res.json(mappedBusinessPartners);
    } catch (error) {
      next(error);
    }
  },

  async getBusinessPartnerByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const { code } = req.params;

      const getBusinessPartnerByCodeUseCase = composeGetBusinessPartnerByCodeUseCase();
      const businessPartner = await getBusinessPartnerByCodeUseCase(session, code);

      const mappedBusinessPartner = mapBusinessPartnerToDto(businessPartner);

      res.json(mappedBusinessPartner);
    } catch (error) {
      next(error);
    }
  },

  async createBusinessPartner(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const businessPartner = req.body;
      console.log('body -->', businessPartner);

      const createBusinessPartnerUseCase = composeCreateBusinessPartnerUseCase();
      const result = await createBusinessPartnerUseCase(session, businessPartner);

      const mappedBusinessPartner = mapBusinessPartnerToDto(result);

      res.status(201).json(mappedBusinessPartner);
    } catch (error) {
      next(error);
    }
  },
};
