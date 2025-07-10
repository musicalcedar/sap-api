import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { SapBusinessPartner } from '../../../domain/entities/sapBusinessPartner';
import {
  SapBusinessPartnerRaw,
  AcceptsEndorsedChecks,
  CardType,
  Country,
  Currency,
  VatLiable,
  UBpcoRTC,
  UPaisCC,
} from '../types/sapBusinessPartnerRaw';

const mapToSapBusinessPartner = (raw: SapBusinessPartnerRaw): SapBusinessPartner => {
  return {
    // Datos básicos
    code: raw.CardCode,
    name: raw.CardName,
    type: raw.CardType,
    groupCode: raw.GroupCode,

    // Datos de contacto
    phone: raw.Phone1 || undefined,
    mobile: raw.Cellular || undefined,
    email: raw.EmailAddress || undefined,
    contactPerson: raw.ContactPerson || undefined,

    // Datos de dirección
    address: raw.Address || undefined,
    mailAddress: raw.MailAddress || undefined,
    city: raw.City || undefined,
    state: raw.BillToState || undefined,
    country: raw.Country || undefined,
    zipCode: raw.ZipCode || undefined,
    block: raw.Block || undefined,

    // Datos fiscales
    federalTaxId: raw.FederalTaxID || undefined,
    vatLiable: raw.VatLiable || undefined,

    // Datos financieros
    currency: raw.Currency || undefined,
    creditLimit: raw.CreditLimit,
    maxCommitment: raw.MaxCommitment,
    discountPercent: raw.DiscountPercent,
    priceList: raw.PriceListNum,
    paymentTerms: raw.PayTermsGrpCode,

    // Saldos
    currentBalance: raw.CurrentAccountBalance,
    openDeliveryBalance: raw.OpenDeliveryNotesBalance,
    openOrdersBalance: raw.OpenOrdersBalance,
    openChecksBalance: raw.OpenChecksBalance,

    // Configuración de ventas
    salesPersonCode: raw.SalesPersonCode,
    backOrder: raw.BackOrder === 'tYES',
    partialDelivery: raw.PartialDelivery === 'tYES',

    // Estados
    isActive: raw.Valid === 'tYES',
    isFrozen: raw.Frozen === 'tYES',

    // Campos personalizados para Colombia
    U_Ciudad_CC: raw.U_Ciudad_CC || undefined,
    U_Departamento_CC: raw.U_Departamento_CC || undefined,
    U_BPCO_RTC: raw.U_BPCO_RTC || undefined,
    U_BPCO_TP: raw.U_BPCO_TP || undefined,
    U_OK1_AC_ECO: raw.U_OK1_AC_ECO || undefined,

    // Fechas
    createdAt:
      raw.CreateDate && raw.CreateTime
        ? {
            date: raw.CreateDate.toString(),
            time: raw.CreateTime,
          }
        : undefined,
    updatedAt:
      raw.UpdateDate && raw.UpdateTime
        ? {
            date: raw.UpdateDate.toString(),
            time: raw.UpdateTime,
          }
        : undefined,

    // Direcciones detalladas
    addresses:
      raw.BPAddresses?.map(address => ({
        name: address.AddressName,
        street: address.Street,
        block: address.Block || undefined,
        city: address.City,
        state: address.State || undefined,
        country: address.Country,
        zipCode: address.ZipCode || undefined,
        type: address.AddressType,
        businessPartnerCode: address.BPCode,
        rowNumber: address.RowNum,
        buildingFloorRoom: address.BuildingFloorRoom || undefined,
        U_Municipio: address.U_Municipio || undefined,
        U_CodDepartamento: address.U_CodDepartamento || undefined,
        createdAt: {
          date: address.CreateDate ? address.CreateDate.toString() : '',
          time: address.CreateTime || '',
        },
      })) || [],

    // Contactos
    contacts:
      raw.ContactEmployees?.map(contact => ({
        name: contact.Name,
        firstName: contact.FirstName || undefined,
        lastName: contact.LastName || undefined,
        position: contact.Position || undefined,
        address: contact.Address || undefined,
        phone: contact.Phone1 || undefined,
        mobile: contact.MobilePhone || undefined,
        email: contact.E_Mail || undefined,
        isActive: contact.Active === 'tYES',
        internalCode: contact.InternalCode,
      })) || [],
  };
};

const mapFromSapBusinessPartner = (partner: SapBusinessPartner): Partial<SapBusinessPartnerRaw> => {
  return {
    CardCode: partner.code,
    CardName: partner.name,
    CardType: partner.type as CardType,
    GroupCode: partner.groupCode,
    Phone1: partner.phone,
    Cellular: partner.mobile,
    EmailAddress: partner.email,
    ContactPerson: partner.contactPerson,
    Address: partner.address,
    MailAddress: partner.mailAddress,
    City: partner.city,
    BillToState: partner.state,
    Country: partner.country as Country,
    ZipCode: partner.zipCode,
    Block: partner.block,
    FederalTaxID: partner.federalTaxId,
    VatLiable: partner.vatLiable as VatLiable,
    Currency: partner.currency as Currency,
    CreditLimit: partner.creditLimit,
    MaxCommitment: partner.maxCommitment,
    DiscountPercent: partner.discountPercent,
    PriceListNum: partner.priceList,
    PayTermsGrpCode: partner.paymentTerms,
    SalesPersonCode: partner.salesPersonCode,
    BackOrder: partner.backOrder ? AcceptsEndorsedChecks.TYES : AcceptsEndorsedChecks.TNO,
    PartialDelivery: partner.partialDelivery
      ? AcceptsEndorsedChecks.TYES
      : AcceptsEndorsedChecks.TNO,
    Valid: partner.isActive ? AcceptsEndorsedChecks.TYES : AcceptsEndorsedChecks.TNO,
    Frozen: partner.isFrozen ? AcceptsEndorsedChecks.TYES : AcceptsEndorsedChecks.TNO,

    // Campos personalizados para Colombia
    U_Ciudad_CC: null, // En SAP es null
    U_Departamento_CC: null, // En SAP es null
    U_BPCO_RTC: partner.U_BPCO_RTC as UBpcoRTC,
    U_BPCO_TP: partner.U_BPCO_TP, // En SAP es string
    U_OK1_AC_ECO: null, // En SAP es null

    // No incluimos direcciones y contactos aquí porque normalmente
    // se manejan con endpoints específicos en SAP B1
  };
};

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

    const response = await axiosSapInstance.post(url, sapBusinessPartner, {
      headers: {
        Cookie: cookies,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return mapToSapBusinessPartner(response.data);
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
