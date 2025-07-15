import { sessionManager } from '../infrastructure/sap/sessionManager';
import { sapAuthService } from '../infrastructure/sap/sapAuthService';
import { config } from '../config';
import { getBusinessPartners } from '../application/use-cases/sap/getBusinessPartnerUseCase';
import { getBusinessPartnerByCode } from '../application/use-cases/sap/getBusinessPartnerByCode';
import { createBusinessPartner } from '../application/use-cases/sap/createBusinessPartner';
import { SapSession } from '../domain/entities/sapSession';
import { SapBusinessPartner } from '../domain/entities/sapBusinessPartner';
import { loginSapSession } from '../application/use-cases/sap/loginSapSessionUseCase';
import { getItems } from '../application/use-cases/sap/getItemsUseCase';
import {
  composeSapBusinessPartnerRepository,
  composeSapItemRepository,
} from '../infrastructure/sap/composition';

export const composeLoginSapSessionUseCase = () => {
  return () => {
    const credentials = {
      CompanyDB: config.SAP_COMPANY_DB,
      UserName: config.SAP_USERNAME,
      Password: config.SAP_PASSWORD,
    };

    return loginSapSession('shared-sap-session', credentials, sessionManager, sapAuthService);
  };
};

export const getSessionValidator = () => {
  return () => sessionManager.validateSession('shared-sap-session');
};

export const composeGetItemsUseCase = () => {
  return (session: SapSession, top: number, skip: number) => {
    const sapItemRepository = composeSapItemRepository();
    return getItems(session, top, skip, sapItemRepository);
  };
};

export const composeGetBusinessPartnersUseCase = () => {
  return (session: SapSession, top: number, skip: number, filter?: string) => {
    const sapBusinessPartnerRepository = composeSapBusinessPartnerRepository();
    return getBusinessPartners(session, top, skip, filter, sapBusinessPartnerRepository);
  };
};

export const composeGetBusinessPartnerByCodeUseCase = () => {
  return (session: SapSession, cardCode: string) => {
    const sapBusinessPartnerRepository = composeSapBusinessPartnerRepository();
    return getBusinessPartnerByCode(session, cardCode, sapBusinessPartnerRepository);
  };
};

export const composeCreateBusinessPartnerUseCase = () => {
  return (session: SapSession, businessPartner: SapBusinessPartner) => {
    const sapBusinessPartnerRepository = composeSapBusinessPartnerRepository();
    return createBusinessPartner(session, businessPartner, sapBusinessPartnerRepository);
  };
};
