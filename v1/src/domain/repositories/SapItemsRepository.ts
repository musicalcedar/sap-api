import { SapItem } from '../entities/sapItem';
import { SapSession } from '../entities/sapSession';

export interface SapItemsRepository {
  getItems(session: SapSession, top: number, skip: number): Promise<SapItem[]>;
  getItemByCode(session: SapSession, itemCode: string): Promise<SapItem>;
}
