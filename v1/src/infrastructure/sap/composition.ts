import { SapBusinessPartnerRepository } from '../../domain/repositories/SapBusinessPartnerRepository';
import { sapBusinessPartnerRepository } from './repositories/sapBusinessPartnerRepository';
import { SapItemsRepository } from '../../domain/repositories/SapItemsRepository';
import { sapItemRepository } from './repositories/sapItemRepository';
import { SapQuotationsRepository } from '../../domain/repositories/SapQuotationsRepository';
import { sapQuotationsRepository } from './repositories/sapQuotationsRepository';

export const composeSapBusinessPartnerRepository = (): SapBusinessPartnerRepository => {
  return sapBusinessPartnerRepository;
};

export const composeSapItemRepository = (): SapItemsRepository => {
  return sapItemRepository;
};

export const composeSapQuotationsRepository = (): SapQuotationsRepository => {
  return sapQuotationsRepository;
};
