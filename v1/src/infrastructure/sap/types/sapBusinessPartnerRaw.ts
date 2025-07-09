/**
 * Representa la estructura de datos cruda que viene directamente de la API de SAP
 * para los socios comerciales (business partners)
 */
export interface SapBusinessPartnerRaw {
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
    ZipCode?: string;
    County?: string;
    State?: string;
    BuildingFloorRoom?: string;
    AddressID?: number;
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
    MiddleName?: string;
    Fax?: string;
    Pager?: string;
    Remarks1?: string;
    Remarks2?: string;
    Password?: string;
    Title?: string;
    PlaceOfBirth?: string;
    Gender?: string;
    Profession?: string;
    CityOfBirth?: string;
    DateOfBirth?: string;
  }>;
  // Campos adicionales que vienen de SAP pero no estamos usando actualmente
  Series?: number;
  Number?: number;
  LocalCurrency?: string;
  SalesPersonCode?: number;
  CreditLimit?: number;
  MaxCommitment?: number;
  DiscountPercent?: number;
  VatGroup?: string;
  ShippingType?: number;
  IndicatorCode?: string;
  Industry?: number;
  Website?: string;
  Frozen?: string;
  BilltoDefault?: string;
  ShipToDefault?: string;
  ValidUntil?: string;
  ValidFrom?: string;
  Valid?: string;
  PriceListNum?: number;
  PayTermsGrpCode?: number;
  Notes?: string;
}
