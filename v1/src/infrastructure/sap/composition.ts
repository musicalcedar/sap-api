import { SapBusinessPartnerRepository } from '../../domain/repositories/SapBusinessPartnerRepository';
import { sapBusinessPartnerRepository } from './repositories/sapBusinessPartnerRepository';

export const composeSapBusinessPartnerRepository = (): SapBusinessPartnerRepository => {
  return sapBusinessPartnerRepository;
};
