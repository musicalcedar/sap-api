import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { SapBusinessPartner } from '../../../domain/entities/sapBusinessPartner';
import { SapBusinessPartnerRaw } from '../types/sapBusinessPartnerRaw';
import { mapFromSapBusinessPartner, mapToSapBusinessPartner } from '../sapMappers';

export const sapBusinessPartnerAdapter = {
  async getBusinessPartners(
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

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    return response.data.value.map(mapToSapBusinessPartner);
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

    return mapToSapBusinessPartner(response.data);
  },

  async createBusinessPartner(session: SapSession, businessPartner: SapBusinessPartner) {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const url = `/BusinessPartners`;

    const sapBusinessPartner = mapFromSapBusinessPartner(businessPartner);

    try {
      const response = await axiosSapInstance.post(url, sapBusinessPartner, {
        headers: {
          Cookie: cookies,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      return mapToSapBusinessPartner(response.data);
    } catch (error: any) {
      if (error.response) {
        console.error('Error de SAP - Status:', error.response.status);
        console.error('Error de SAP - Headers:', error.response.headers);
        console.error('Error de SAP - Data:', JSON.stringify(error.response.data, null, 2));

        if (error.response.data && error.response.data.error) {
          console.error('Mensaje de error de SAP:', error.response.data.error.message);
        }
      } else if (error.request) {
        console.error('No se recibió respuesta de SAP:', error.request);
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
      }

      throw error;
    }
  },

  async updateBusinessPartner(
    session: SapSession,
    cardCode: string,
    businessPartner: SapBusinessPartner
  ) {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const url = `/BusinessPartners('${cardCode}')`;

    const sapBusinessPartner = mapFromSapBusinessPartner(businessPartner);

    const response = await axiosSapInstance.patch(url, sapBusinessPartner, {
      headers: {
        Cookie: cookies,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return mapToSapBusinessPartner(response.data);
  },

  async deleteBusinessPartner(session: SapSession, cardCode: string) {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const url = `/BusinessPartners('${cardCode}')`;

    await axiosSapInstance.delete(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });
  },
};
