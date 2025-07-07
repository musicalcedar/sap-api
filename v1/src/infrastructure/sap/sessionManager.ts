import Redis from 'ioredis';
import { config } from '../../config';
import { SapSession } from '../../domain/entities/sapSession';
import { sapAuthService } from './sapAuthService';
import { createSapLoginFunction } from '../../composition/sapSessionFactory';
import { SapSessionRepository } from '../../domain/repositories/SapSessionRepository';

const redis = new Redis(config.REDIS_URL);

const sessionRepo: SapSessionRepository = {
  async saveSession(sessionKey: string, session: SapSession) {
    await redis.set(sessionKey, JSON.stringify(session));
  },
  async getSession(sessionKey: string) {
    const session = await redis.get(sessionKey);
    return session ? (JSON.parse(session) as SapSession) : null;
  },
  async deleteSession(sessionKey: string) {
    await redis.del(sessionKey);
  },
};

const sapLogin = createSapLoginFunction(sessionRepo, sapAuthService);

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
      return sapLogin(sessionKey);
    }
    return session;
  },
};
