import { SapQuotationsRepository } from '../../../domain/repositories/SapQuotationsRepository';
import { SapSession } from '../../../domain/entities/sapSession';
import { sapHttpService } from '../services/sapHttpService';
import { SapQuotationsRaw } from '../types/sapQuotationsRaw';
import { SapQuotation } from '../../../domain/entities/sapQuotation';
import { mapToSapQuotation } from '../sapMappers';

export const sapQuotationsRepository: SapQuotationsRepository = {
  async getQuotations(
    session: SapSession,
    top: number = 20,
    skip: number = 0,
    filter?: string
  ): Promise<SapQuotation[]> {
    let url = `/Quotations?`;

    if (filter) {
      url += `$filter=contains(CardName, '${filter}')&$top=${top}&$skip=${skip}`;
    } else {
      url += `$top=${top}&$skip=${skip}`;
    }

    const response = await sapHttpService.get<{ value: SapQuotationsRaw[] }>(session, url);
    return response.value.map(mapToSapQuotation);
  },
};
