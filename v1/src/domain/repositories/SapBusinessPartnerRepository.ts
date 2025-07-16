import { SapBusinessPartner } from '../entities/sapBusinessPartner';
import { SapSession } from '../entities/sapSession';
import { PaginatedResponse } from '../types/PaginatedResponse';

export interface SapBusinessPartnerRepository {
  getBusinessPartners(
    session: SapSession,
    top: number,
    skip: number,
    filter?: string
  ): Promise<PaginatedResponse<SapBusinessPartner>>;
  getBusinessPartnerByCode(session: SapSession, cardCode: string): Promise<SapBusinessPartner>;
  createBusinessPartner(
    session: SapSession,
    businessPartner: SapBusinessPartner
  ): Promise<SapBusinessPartner>;
  updateBusinessPartner(
    session: SapSession,
    cardCode: string,
    businessPartner: SapBusinessPartner
  ): Promise<SapBusinessPartner>;
  deleteBusinessPartner(session: SapSession, cardCode: string): Promise<void>;
}
