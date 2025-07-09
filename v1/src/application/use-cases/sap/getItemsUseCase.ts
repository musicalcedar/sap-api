import { SapSession } from '@/domain/entities/sapSession';
import { SapItemsRepository } from '@/domain/repositories/SapItemsRepository';

export const getItems = (
  session: SapSession,
  top: number,
  skip: number,
  sapItemsRepository: SapItemsRepository
) => {
  return sapItemsRepository.getItems(session, top, skip);
};
