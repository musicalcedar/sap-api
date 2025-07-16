import { SapSession } from '@/domain/entities/sapSession';
import { SapQuotationsRepository } from '@/domain/repositories/SapQuotationsRepository';
import { PaginatedResponse } from '@/domain/types/PaginatedResponse';
import { SapQuotation } from '@/domain/entities/sapQuotation';

export const getQuotations = (
  session: SapSession,
  top: number,
  skip: number,
  filter: string | undefined,
  sapQuotationsRepository: SapQuotationsRepository
): Promise<PaginatedResponse<SapQuotation>> => {
  return sapQuotationsRepository.getQuotations(session, top, skip, filter);
};
