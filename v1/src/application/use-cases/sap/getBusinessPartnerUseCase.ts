import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';
import { SapSession } from '@/domain/entities/sapSession';
import { SapBusinessPartnerRepository } from '@/domain/repositories/SapBusinessPartnerRepository';

export const getBusinessPartners = (
  session: SapSession,
  top: number,
  skip: number,
  filter: string | undefined,
  sapBusinessPartnerRepository: SapBusinessPartnerRepository
) => {
  return sapBusinessPartnerRepository.getBusinessPartners(session, top, skip, filter);
};
