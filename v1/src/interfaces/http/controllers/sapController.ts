import { Request, Response, NextFunction } from 'express';
import { loginSapSession } from '../../../application/use-cases/sap/loginSapSession';
import { sessionManager } from '../../../infrastructure/sap/sessionManager';
import { sapAuthService } from '../../../infrastructure/sap/sapAuthService';
import { config } from '../../../config';
import { axiosSapInstance } from '../../../infrastructure/sap/axiosSapInstance';
import { mapSapItemToDto } from '../../../infrastructure/sap/mappers/itemMapper';
import { SapItem } from '../../../infrastructure/sap/types/item';

export const sapController = {
  async loginSapSession(req: Request, res: Response, next: NextFunction) {
    try {
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
  async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      const session = req.cookies.session;
      const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

      const top = Number(req.query.top) || 20;
      const skip = Number(req.query.skip) || 0;

      let odataQuery =
        '$select=ItemCode,ItemName,Manufacturer,ItemPrices,ItemWarehouseInfoCollection,Manufacturer2' +
        '&$expand=Manufacturer2' +
        `&$top=${top}` +
        `&$skip=${skip}`;

      const url = `/Items?${odataQuery}`;

      const response = await axiosSapInstance.get(url, {
        headers: { Cookie: cookies },
        withCredentials: true,
      });

      const items = (response.data.value as SapItem[]).map(mapSapItemToDto);
      res.json(items);
    } catch (error) {
      next(error);
    }
  },
};
