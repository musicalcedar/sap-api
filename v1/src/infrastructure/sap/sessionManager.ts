import Redis from 'ioredis';
import { config } from '../../config';
import { SapSession } from '../../domain/entities/sapSession';

const redis = new Redis(config.REDIS_URL);

export const sessionManager = {
  async getSession(userId: string) {
    const session = await redis.get(userId);
    return session ? (JSON.parse(session) as SapSession) : null;
  },
  async saveSession(userId: string, session: SapSession) {
    await redis.set(userId, JSON.stringify(session));
  },
  async deleteSession(userId: string) {
    await redis.del(userId);
  },
};
