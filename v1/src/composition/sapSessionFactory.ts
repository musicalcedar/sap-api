import { SapAuthService } from '../domain/services/sapAuthService';
import { SapSessionRepository } from '../domain/repositories/SapSessionRepository';
import { config } from '../config';

export const createSapLoginFunction = (
  sessionRepo: SapSessionRepository,
  authService: SapAuthService
) => {
  return async (sessionKey: string) => {
    const credentials = {
      CompanyDB: config.SAP_COMPANY_DB,
      UserName: config.SAP_USERNAME,
      Password: config.SAP_PASSWORD,
    };

    const session = await authService.login(credentials);
    await sessionRepo.saveSession(sessionKey, session);
    return session;
  };
};
