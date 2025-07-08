import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { SapBusinessPartner } from '../types/businessPartner';

export const sapBusinessPartnerAdapter = {
  async getBusinessPartner(
    session: SapSession,
    top: number = 20,
    skip: number = 0,
    filter?: string
  ): Promise<SapBusinessPartner[]> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    let url = `/BusinessPartners?`;

    if (filter) {
      url += `$filter=contains(CardName, '${filter}')&$top=${top}&$skip=${skip}`;
    } else {
      url += `$top=${top}&$skip=${skip}`;
    }

    console.log({ url });

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    return response.data.value as SapBusinessPartner[];
  },

  async getBusinessPartnerByCode(
    session: SapSession,
    cardCode: string
  ): Promise<SapBusinessPartner> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const url = `/BusinessPartners('${cardCode}')`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    return response.data as SapBusinessPartner;
  },
};
