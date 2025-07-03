import { SapSessionRepository } from '../../../domain/repositories/SapSessionRepository';
import { SapAuthService } from '../../../domain/services/sapAuthService';
import { SapSession } from '../../../domain/entities/sapSession';

type SapCredentials = {
  CompanyDB: string;
  UserName: string;
  Password: string;
};

export async function loginSapSession(
  userId: string,
  credentials: SapCredentials,
  sessionRepo: SapSessionRepository,
  sapAuth: SapAuthService
): Promise<SapSession> {
  const session = await sapAuth.login(credentials);

  await sessionRepo.saveSession(userId, session);

  return session;
}
