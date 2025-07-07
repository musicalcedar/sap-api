import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { SapBusinessPartner } from '../types/businessPartner';

export const sapBusinessPartnerAdapter = {
  /**
   * Obtiene una lista paginada de socios comerciales
   * @param session Sesión SAP activa
   * @param top Número máximo de registros a devolver
   * @param skip Número de registros a saltar (para paginación)
   * @param filter Filtro opcional para aplicar a la consulta
   * @returns Lista de socios comerciales
   */
  async getBusinessPartner(
    session: SapSession,
    top: number = 20,
    skip: number = 0,
    filter?: string
  ): Promise<SapBusinessPartner[]> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    // Construir la consulta OData
    let odataQuery =
      '$select=CardCode,CardName,CardType,GroupCode,Address,MailAddress,Phone1,Cellular,' +
      'EmailAddress,FederalTaxID,City,Country,Currency,VatLiable,Block,CreateDate,CreateTime,' +
      'UpdateDate,UpdateTime,CurrentAccountBalance,OpenDeliveryNotesBalance,OpenOrdersBalance' +
      '&$expand=BPAddresses,ContactEmployees' +
      `&$top=${top}` +
      `&$skip=${skip}`;

    // Añadir filtro si existe
    if (filter) {
      odataQuery += `&$filter=${filter}`;
    }

    const url = `/BusinessPartners?${odataQuery}`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    return response.data.value as SapBusinessPartner[];
  },

  /**
   * Obtiene un socio comercial por su código
   * @param session Sesión SAP activa
   * @param cardCode Código del socio comercial
   * @returns Socio comercial
   */
  async getBusinessPartnerByCode(
    session: SapSession,
    cardCode: string
  ): Promise<SapBusinessPartner> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    console.log({ cookies, cardCode });

    const url = `/BusinessPartners('${cardCode}')`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    return response.data as SapBusinessPartner;
  },

  /**
   * Obtiene socios comerciales por tipo (clientes, proveedores o leads)
   * @param session Sesión SAP activa
   * @param type Tipo de socio comercial
   * @param top Número máximo de registros a devolver
   * @param skip Número de registros a saltar (para paginación)
   * @returns Lista de socios comerciales del tipo especificado
   */
  async getBusinessPartnersByType(
    session: SapSession,
    type: string,
    top: number = 20,
    skip: number = 0
  ): Promise<SapBusinessPartner[]> {
    const filter = `CardType eq '${type}'`;
    return this.getBusinessPartner(session, top, skip, filter);
  },
};
