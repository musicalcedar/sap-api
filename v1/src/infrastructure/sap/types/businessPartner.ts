/**
 * Tipos para socios comerciales (Business Partners) de SAP B1
 */

// Tipo para la dirección del socio comercial
export interface SapBusinessPartnerAddress {
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
}

// Tipo para el contacto del socio comercial
export interface SapBusinessPartnerContact {
  Name?: string;
  Position?: string;
  Address?: string;
  Phone1?: string;
  MobilePhone?: string;
  E_Mail?: string;
  Active?: string;
}

// Tipo principal para el socio comercial
export interface SapBusinessPartner {
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
  City?: string;
  Country?: string;
  Currency?: string;
  VatLiable?: string;
  Block?: string;
  CreateDate?: string;
  CreateTime?: string;
  UpdateDate?: string;
  UpdateTime?: string;
  BPAddresses?: SapBusinessPartnerAddress[];
  ContactEmployees?: SapBusinessPartnerContact[];
  CurrentAccountBalance?: number;
  OpenDeliveryNotesBalance?: number;
  OpenOrdersBalance?: number;
}
