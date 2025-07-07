import { sessionManager } from '../infrastructure/sap/sessionManager';
import { sapAuthService } from '../infrastructure/sap/sapAuthService';
import { loginSapSession } from '../application/use-cases/sap/loginSapSession';
import { config } from '../config';

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
