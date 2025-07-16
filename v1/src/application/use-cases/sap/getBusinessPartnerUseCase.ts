import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';
import { SapSession } from '@/domain/entities/sapSession';
import { SapBusinessPartnerRepository } from '@/domain/repositories/SapBusinessPartnerRepository';
import { PaginatedResponse } from '@/domain/types/PaginatedResponse';

export const getBusinessPartners = (
  session: SapSession,
  top: number,
  skip: number,
  filter: string | undefined,
  sapBusinessPartnerRepository: SapBusinessPartnerRepository
): Promise<PaginatedResponse<SapBusinessPartner>> => {
  return sapBusinessPartnerRepository.getBusinessPartners(session, top, skip, filter);
};
