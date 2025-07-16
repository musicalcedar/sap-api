import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';
import { SapSession } from '@/domain/entities/sapSession';
import { SapBusinessPartnerRepository } from '@/domain/repositories/SapBusinessPartnerRepository';

export const createBusinessPartner = (
  session: SapSession,
  businessPartner: SapBusinessPartner,
  sapBusinessPartnerRepository: SapBusinessPartnerRepository
) => {
  return sapBusinessPartnerRepository.createBusinessPartner(session, businessPartner);
};
