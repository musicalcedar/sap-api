import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { SapBusinessPartner } from '../../../domain/entities/sapBusinessPartner';

interface SapBusinessPartnerRaw {
  CardCode: string;
  CardName: string;
  CardType: string;
  GroupCode: number;
  Address?: string;
  MailAddress?: string;
  Phone1?: string;
  Cellular?: string;
  EmailAddress?: string;
  FederalTaxID?: string;
  VatLiable?: string;
  City?: string;
  Country?: string;
  Block?: string;
  Currency?: string;
  CurrentAccountBalance?: number;
  OpenDeliveryNotesBalance?: number;
  OpenOrdersBalance?: number;
  CreateDate?: string;
  CreateTime?: string;
  UpdateDate?: string;
  UpdateTime?: string;
  BPAddresses?: Array<{
    AddressName: string;
    Street: string;
    Block?: string;
    City: string;
    Country: string;
    AddressType: string;
    BPCode: string;
    RowNum: number;
    CreateDate: string;
    CreateTime: string;
  }>;
  ContactEmployees?: Array<{
    Name?: string;
    Position?: string;
    Address?: string;
    Phone1?: string;
    MobilePhone?: string;
    E_Mail?: string;
    Active?: string;
    InternalCode?: number;
    FirstName?: string;
    LastName?: string;
  }>;
}

const mapToSapBusinessPartner = (raw: SapBusinessPartnerRaw): SapBusinessPartner => {
  return {
    code: raw.CardCode,
    name: raw.CardName,
    type: raw.CardType,
    groupCode: raw.GroupCode,
    address: raw.Address,
    mailAddress: raw.MailAddress,
    phone: raw.Phone1,
    mobile: raw.Cellular,
    email: raw.EmailAddress,
    federalTaxId: raw.FederalTaxID,
    vatLiable: raw.VatLiable,
    city: raw.City,
    country: raw.Country,
    block: raw.Block,
    currency: raw.Currency,
    currentBalance: raw.CurrentAccountBalance,
    openDeliveryBalance: raw.OpenDeliveryNotesBalance,
    openOrdersBalance: raw.OpenOrdersBalance,
    createdAt:
      raw.CreateDate && raw.CreateTime
        ? {
            date: raw.CreateDate,
            time: raw.CreateTime,
          }
        : undefined,
    updatedAt:
      raw.UpdateDate && raw.UpdateTime
        ? {
            date: raw.UpdateDate,
            time: raw.UpdateTime,
          }
        : undefined,
    addresses: raw.BPAddresses?.map(address => ({
      name: address.AddressName,
      street: address.Street,
      block: address.Block,
      city: address.City,
      country: address.Country,
      type: address.AddressType,
      businessPartnerCode: address.BPCode,
      rowNumber: address.RowNum,
      createdAt: {
        date: address.CreateDate,
        time: address.CreateTime,
      },
    })),
    contacts: raw.ContactEmployees?.map(contact => ({
      name: contact.Name,
      position: contact.Position,
      address: contact.Address,
      phone: contact.Phone1,
      mobile: contact.MobilePhone,
      email: contact.E_Mail,
      isActive: contact.Active === 'Y',
    })),
  };
};

const mapFromSapBusinessPartner = (partner: SapBusinessPartner): SapBusinessPartnerRaw => {
  return {
    CardCode: partner.code,
    CardName: partner.name,
    CardType: partner.type,
    GroupCode: partner.groupCode,
    Address: partner.address,
    MailAddress: partner.mailAddress,
    Phone1: partner.phone,
    Cellular: partner.mobile,
    EmailAddress: partner.email,
    FederalTaxID: partner.federalTaxId,
    VatLiable: partner.vatLiable,
    City: partner.city,
    Country: partner.country,
    Block: partner.block,
    Currency: partner.currency,
    CurrentAccountBalance: partner.currentBalance,
    OpenDeliveryNotesBalance: partner.openDeliveryBalance,
    OpenOrdersBalance: partner.openOrdersBalance,
    BPAddresses: partner.addresses?.map(address => ({
      AddressName: address.name,
      Street: address.street,
      Block: address.block,
      City: address.city,
      Country: address.country,
      AddressType: address.type,
      BPCode: address.businessPartnerCode,
      RowNum: address.rowNumber,
      CreateDate: address.createdAt.date,
      CreateTime: address.createdAt.time,
    })),
    ContactEmployees: partner.contacts?.map(contact => ({
      Name: contact.name,
      Position: contact.position,
      Address: contact.address,
      Phone1: contact.phone,
      MobilePhone: contact.mobile,
      E_Mail: contact.email,
      Active: contact.isActive ? 'Y' : 'N',
    })),
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
      headers: { Cookie: cookies },
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

    const response = await axiosSapInstance.put(url, sapBusinessPartner, {
      headers: { Cookie: cookies },
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
