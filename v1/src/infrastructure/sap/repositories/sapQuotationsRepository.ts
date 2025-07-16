import { SapQuotationsRepository } from '../../../domain/repositories/SapQuotationsRepository';
import { SapSession } from '../../../domain/entities/sapSession';
import { sapHttpService } from '../services/sapHttpService';
import { SapQuotationsRaw } from '../types/sapQuotationsRaw';
import { SapQuotation } from '../../../domain/entities/sapQuotation';
import { mapToSapQuotation } from '../sapMappers';
import { PaginatedResponse } from '../../../domain/types/PaginatedResponse';

export const sapQuotationsRepository: SapQuotationsRepository = {
  async getQuotations(
    session: SapSession,
    top: number = 20,
    skip: number = 0,
    filter?: string
  ): Promise<PaginatedResponse<SapQuotation>> {
    let url = `/Quotations?`;

    if (filter) {
      // Verificar si el filtro es un número de documento (DocNum)
      const docNumMatch = filter.match(/^\d+$/);
      if (docNumMatch) {
        url += `$filter=DocNum eq ${filter}&$top=${top}&$skip=${skip}`;
      } else {
        url += `$filter=contains(CardName, '${filter}')&$top=${top}&$skip=${skip}`;
      }
    } else {
      url += `$top=${top}&$skip=${skip}`;
    }

    const response = await sapHttpService.get<{ value: SapQuotationsRaw[], '@odata.count'?: number }>(session, url);
    const totalCount = response['@odata.count'] || response.value.length;
    
    return {
      items: response.value.map(mapToSapQuotation),
      pagination: {
        total: totalCount,
        page: Math.floor(skip / top) + 1,
        pageSize: top,
        pages: Math.ceil(totalCount / top)
      }
    };
  },
};
