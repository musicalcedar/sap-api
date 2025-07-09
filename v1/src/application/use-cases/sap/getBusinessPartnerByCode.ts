import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';
import { SapSession } from '@/domain/entities/sapSession';
import { SapBusinessPartnerRepository } from '@/domain/repositories/SapBusinessPartnerRepository';

export const getBusinessPartnerByCode = (
  session: SapSession,
  cardCode: string,
  sapBusinessPartnerRepository: SapBusinessPartnerRepository
) => {
  return sapBusinessPartnerRepository.getBusinessPartnerByCode(session, cardCode);
};
