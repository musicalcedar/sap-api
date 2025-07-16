import { SapBusinessPartnerRepository } from '../../../domain/repositories/SapBusinessPartnerRepository';
import { SapBusinessPartner } from '../../../domain/entities/sapBusinessPartner';
import { SapSession } from '../../../domain/entities/sapSession';
import { sapHttpService } from '../services/sapHttpService';
import { mapToSapBusinessPartner, mapFromSapBusinessPartner } from '../sapMappers';
import { SapBusinessPartnerRaw } from '../types/sapBusinessPartnerRaw';
import { PaginatedResponse } from '../../../domain/types/PaginatedResponse';

export const sapBusinessPartnerRepository: SapBusinessPartnerRepository = {
  async getBusinessPartners(
    session: SapSession,
    top: number = 20,
    skip: number = 0,
    filter?: string
  ): Promise<PaginatedResponse<SapBusinessPartner>> {
    let url = `/BusinessPartners?`;

    if (filter) {
      url += `$filter=contains(CardName, '${filter}')&$top=${top}&$skip=${skip}`;
    } else {
      url += `$top=${top}&$skip=${skip}`;
    }

    const response = await sapHttpService.get<{ value: SapBusinessPartnerRaw[], '@odata.count'?: number }>(session, url);
    const totalCount = response['@odata.count'] || response.value.length;
    
    return {
      items: response.value.map(mapToSapBusinessPartner),
      pagination: {
        total: totalCount,
        page: Math.floor(skip / top) + 1,
        pageSize: top,
        pages: Math.ceil(totalCount / top)
      }
    };
  },

  async getBusinessPartnerByCode(
    session: SapSession,
    cardCode: string
  ): Promise<SapBusinessPartner> {
    const url = `/BusinessPartners('${cardCode}')`;
    const response = await sapHttpService.get<SapBusinessPartnerRaw>(session, url);
    return mapToSapBusinessPartner(response);
  },

  async createBusinessPartner(
    session: SapSession,
    businessPartner: SapBusinessPartner
  ): Promise<SapBusinessPartner> {
    const url = `/BusinessPartners`;
    const sapBusinessPartnerData = mapFromSapBusinessPartner(businessPartner);

    try {
      const response = await sapHttpService.post<SapBusinessPartnerRaw>(
        session,
        url,
        sapBusinessPartnerData
      );

      return mapToSapBusinessPartner(response);
    } catch (error) {
      // Solo registramos el error para debugging, pero lo propagamos hacia arriba
      // para que sea manejado por los controladores según los principios de Clean Architecture
      console.error('Error al crear Business Partner en SAP:', error);
      throw error;
    }
  },

  async updateBusinessPartner(
    session: SapSession,
    cardCode: string,
    businessPartner: SapBusinessPartner
  ): Promise<SapBusinessPartner> {
    const url = `/BusinessPartners('${cardCode}')`;
    const sapBusinessPartnerData = mapFromSapBusinessPartner(businessPartner);

    const response = await sapHttpService.patch<SapBusinessPartnerRaw>(
      session,
      url,
      sapBusinessPartnerData
    );

    return mapToSapBusinessPartner(response);
  },

  async deleteBusinessPartner(session: SapSession, cardCode: string): Promise<void> {
    const url = `/BusinessPartners('${cardCode}')`;
    await sapHttpService.delete(session, url);
  },
};
