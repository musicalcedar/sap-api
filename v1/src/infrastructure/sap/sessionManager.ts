import Redis from 'ioredis';
import { config } from '../../config';
import { SapSession } from '../../domain/entities/sapSession';
import { loginSapSession } from '@/application/use-cases/sap/loginSapSession';
import { sapAuthService } from './sapAuthService';

const redis = new Redis(config.REDIS_URL);

export const sessionManager = {
  async getSession(sessionKey: string) {
    const session = await redis.get(sessionKey);
    return session ? (JSON.parse(session) as SapSession) : null;
  },
  async saveSession(sessionKey: string, session: SapSession) {
    await redis.set(sessionKey, JSON.stringify(session));
  },
  async deleteSession(sessionKey: string) {
    await redis.del(sessionKey);
  },
  async logoutSession(sessionKey: string) {
    await redis.del(sessionKey);
  },
  async validateSession(sessionKey: string) {
    const session = await this.getSession(sessionKey);
    if (!session || session.expiresAt < Date.now()) {
      const credentials = {
        CompanyDB: config.SAP_COMPANY_DB,
        UserName: config.SAP_USERNAME,
        Password: config.SAP_PASSWORD,
      };

      const session = await loginSapSession(
        'shared-sap-session',
        credentials,
        this,
        sapAuthService
      );
      return session;
    }
    return session;
  },
};
