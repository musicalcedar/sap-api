import { SapBusinessPartnerRepository } from '../../domain/repositories/SapBusinessPartnerRepository';
import { sapBusinessPartnerRepository } from './repositories/sapBusinessPartnerRepository';
import { SapItemsRepository } from '../../domain/repositories/SapItemsRepository';
import { sapItemRepository } from './repositories/sapItemRepository';

export const composeSapBusinessPartnerRepository = (): SapBusinessPartnerRepository => {
  return sapBusinessPartnerRepository;
};

export const composeSapItemRepository = (): SapItemsRepository => {
  return sapItemRepository;
};
