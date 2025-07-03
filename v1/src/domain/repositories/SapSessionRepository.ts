import { SapSession } from '../entities/sapSession';

export interface SapSessionRepository {
  getSession(userId: string): Promise<SapSession | null>;
  saveSession(userId: string, session: SapSession): Promise<void>;
  deleteSession(userId: string): Promise<void>;
}
