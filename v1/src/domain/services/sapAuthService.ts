import { SapSession } from '../entities/sapSession';

export interface SapAuthService {
  login(credentials: {
    CompanyDB: string;
    UserName: string;
    Password: string;
  }): Promise<SapSession>;
  logout(session: SapSession): Promise<void>;
}
