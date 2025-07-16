import { SapSession } from '../entities/sapSession';
import { SapQuotation } from '../entities/sapQuotation';
import { PaginatedResponse } from '../types/PaginatedResponse';

export interface SapQuotationsRepository {
  getQuotations(
    session: SapSession,
    top: number,
    skip: number,
    filter?: string
  ): Promise<PaginatedResponse<SapQuotation>>;
}
