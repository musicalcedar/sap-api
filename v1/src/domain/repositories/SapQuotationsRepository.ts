import { SapSession } from '../entities/sapSession';
import { SapQuotation } from '../entities/sapQuotation';

export interface SapQuotationsRepository {
  getQuotations(
    session: SapSession,
    top: number,
    skip: number,
    filter?: string
  ): Promise<SapQuotation[]>;
}
