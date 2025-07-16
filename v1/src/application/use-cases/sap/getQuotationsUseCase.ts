import { SapSession } from '../../../domain/entities/sapSession';
import { SapQuotationsRepository } from '../../../domain/repositories/SapQuotationsRepository';

export const getQuotations = (
  session: SapSession,
  top: number,
  skip: number,
  filter: string | undefined,
  sapQuotationsRepository: SapQuotationsRepository
) => {
  return sapQuotationsRepository.getQuotations(session, top, skip, filter);
};
