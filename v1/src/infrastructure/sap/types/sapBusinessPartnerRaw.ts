export interface Welcome {
  'odata.metadata': string;
  value: SapBusinessPartnerRaw[];
  'odata.nextLink': string;
}

export interface SapBusinessPartnerRaw {
  'odata.etag': string;
  CardCode: string;
  CardName: string;
  CardType: CardType;
  GroupCode: number;
  Address: string;
  ZipCode: null | string;
  MailAddress: string;
  MailZipCode: null | string;
  Phone1: string;
  Phone2: null | string;
  Fax: null;
  ContactPerson: null | string;
  Notes: null;
  PayTermsGrpCode: number;
  CreditLimit: number;
  MaxCommitment: number;
  DiscountPercent: number;
  VatLiable: VatLiable;
  FederalTaxID: string;
  DeductibleAtSource: AcceptsEndorsedChecks;
  DeductionPercent: number;
  DeductionValidUntil: null;
  PriceListNum: number;
  IntrestRatePercent: number;
  CommissionPercent: number;
  CommissionGroupCode: number;
  FreeText: null;
  SalesPersonCode: number;
  Currency: Currency;
  RateDiffAccount: null | string;
  Cellular: null | string;
  AvarageLate: null;
  City: string;
  County: null;
  Country: Country;
  MailCity: string;
  MailCounty: null;
  MailCountry: Country;
  EmailAddress: string;
  Picture: null;
  DefaultAccount: null;
  DefaultBranch: null;
  DefaultBankCode: string;
  AdditionalID: null;
  Pager: null;
  FatherCard: null;
  CardForeignName: null;
  FatherType: FatherType;
  DeductionOffice: null;
  ExportCode: null;
  MinIntrest: number;
  CurrentAccountBalance: number;
  OpenDeliveryNotesBalance: number;
  OpenOrdersBalance: number;
  OpenChecksBalance: number;
  VatGroup: null;
  ShippingType: null;
  Password: null;
  Indicator: null;
  IBAN: null;
  CreditCardCode: number;
  CreditCardNum: null;
  CreditCardExpiration: null;
  DebitorAccount: string;
  OpenOpportunities: null;
  Valid: AcceptsEndorsedChecks;
  ValidFrom: null;
  ValidTo: null;
  ValidRemarks: null;
  Frozen: AcceptsEndorsedChecks;
  FrozenFrom: null;
  FrozenTo: null;
  FrozenRemarks: null;
  Block: null | string;
  BillToState: string;
  ShipToState: string;
  ExemptNum: null;
  Priority: number;
  FormCode1099: null;
  Box1099: null;
  PeymentMethodCode: null;
  BackOrder: AcceptsEndorsedChecks;
  PartialDelivery: AcceptsEndorsedChecks;
  BlockDunning: AcceptsEndorsedChecks;
  BankCountry: Country | null;
  HouseBank: null;
  HouseBankCountry: Country | null;
  HouseBankAccount: null;
  ShipToDefault: BilltoDefault;
  DunningLevel: null;
  DunningDate: null;
  CollectionAuthorization: AcceptsEndorsedChecks;
  DME: null;
  InstructionKey: null;
  SinglePayment: AcceptsEndorsedChecks;
  ISRBillerID: null;
  PaymentBlock: AcceptsEndorsedChecks;
  ReferenceDetails: null;
  HouseBankBranch: null;
  OwnerIDNumber: null;
  PaymentBlockDescription: number;
  TaxExemptionLetterNum: null;
  MaxAmountOfExemption: number;
  ExemptionValidityDateFrom: null;
  ExemptionValidityDateTo: null;
  LinkedBusinessPartner: null;
  LastMultiReconciliationNum: null;
  DeferredTax: AcceptsEndorsedChecks;
  Equalization: AcceptsEndorsedChecks;
  SubjectToWithholdingTax: SubjectToWithholdingTax;
  CertificateNumber: null;
  ExpirationDate: null;
  NationalInsuranceNum: null;
  AccrualCriteria: AcceptsEndorsedChecks;
  WTCode: null;
  BillToBuildingFloorRoom: null | string;
  DownPaymentClearAct: string;
  ChannelBP: null;
  DefaultTechnician: null;
  BilltoDefault: BilltoDefault;
  CustomerBillofExchangDisc: null;
  Territory: number | null;
  ShipToBuildingFloorRoom: null | string;
  CustomerBillofExchangPres: null;
  ProjectCode: null;
  VatGroupLatinAmerica: null;
  DunningTerm: null;
  Website: null;
  OtherReceivablePayable: null;
  BillofExchangeonCollection: null;
  CompanyPrivate: CompanyPrivate;
  LanguageCode: number;
  UnpaidBillofExchange: null;
  WithholdingTaxDeductionGroup: number;
  ClosingDateProcedureNumber: null;
  Profession: null;
  BankChargesAllocationCode: null;
  TaxRoundingRule: TaxRoundingRule;
  Properties1: AcceptsEndorsedChecks;
  Properties2: AcceptsEndorsedChecks;
  Properties3: AcceptsEndorsedChecks;
  Properties4: AcceptsEndorsedChecks;
  Properties5: AcceptsEndorsedChecks;
  Properties6: AcceptsEndorsedChecks;
  Properties7: AcceptsEndorsedChecks;
  Properties8: AcceptsEndorsedChecks;
  Properties9: AcceptsEndorsedChecks;
  Properties10: AcceptsEndorsedChecks;
  Properties11: AcceptsEndorsedChecks;
  Properties12: AcceptsEndorsedChecks;
  Properties13: AcceptsEndorsedChecks;
  Properties14: AcceptsEndorsedChecks;
  Properties15: AcceptsEndorsedChecks;
  Properties16: AcceptsEndorsedChecks;
  Properties17: AcceptsEndorsedChecks;
  Properties18: AcceptsEndorsedChecks;
  Properties19: AcceptsEndorsedChecks;
  Properties20: AcceptsEndorsedChecks;
  Properties21: AcceptsEndorsedChecks;
  Properties22: AcceptsEndorsedChecks;
  Properties23: AcceptsEndorsedChecks;
  Properties24: AcceptsEndorsedChecks;
  Properties25: AcceptsEndorsedChecks;
  Properties26: AcceptsEndorsedChecks;
  Properties27: AcceptsEndorsedChecks;
  Properties28: AcceptsEndorsedChecks;
  Properties29: AcceptsEndorsedChecks;
  Properties30: AcceptsEndorsedChecks;
  Properties31: AcceptsEndorsedChecks;
  Properties32: AcceptsEndorsedChecks;
  Properties33: AcceptsEndorsedChecks;
  Properties34: AcceptsEndorsedChecks;
  Properties35: AcceptsEndorsedChecks;
  Properties36: AcceptsEndorsedChecks;
  Properties37: AcceptsEndorsedChecks;
  Properties38: AcceptsEndorsedChecks;
  Properties39: AcceptsEndorsedChecks;
  Properties40: AcceptsEndorsedChecks;
  Properties41: AcceptsEndorsedChecks;
  Properties42: AcceptsEndorsedChecks;
  Properties43: AcceptsEndorsedChecks;
  Properties44: AcceptsEndorsedChecks;
  Properties45: AcceptsEndorsedChecks;
  Properties46: AcceptsEndorsedChecks;
  Properties47: AcceptsEndorsedChecks;
  Properties48: AcceptsEndorsedChecks;
  Properties49: AcceptsEndorsedChecks;
  Properties50: AcceptsEndorsedChecks;
  Properties51: AcceptsEndorsedChecks;
  Properties52: AcceptsEndorsedChecks;
  Properties53: AcceptsEndorsedChecks;
  Properties54: AcceptsEndorsedChecks;
  Properties55: AcceptsEndorsedChecks;
  Properties56: AcceptsEndorsedChecks;
  Properties57: AcceptsEndorsedChecks;
  Properties58: AcceptsEndorsedChecks;
  Properties59: AcceptsEndorsedChecks;
  Properties60: AcceptsEndorsedChecks;
  Properties61: AcceptsEndorsedChecks;
  Properties62: AcceptsEndorsedChecks;
  Properties63: AcceptsEndorsedChecks;
  Properties64: AcceptsEndorsedChecks;
  CompanyRegistrationNumber: null;
  VerificationNumber: null;
  DiscountBaseObject: DiscountBaseObject;
  DiscountRelations: DiscountRelations;
  TypeReport: TypeReport;
  ThresholdOverlook: AcceptsEndorsedChecks;
  SurchargeOverlook: AcceptsEndorsedChecks;
  Remark1: null;
  ConCerti: null;
  DownPaymentInterimAccount: null | string;
  OperationCode347: OperationCode347;
  InsuranceOperation347: AcceptsEndorsedChecks;
  HierarchicalDeduction: AcceptsEndorsedChecks;
  ShaamGroup: ShaamGroup;
  WithholdingTaxCertified: AcceptsEndorsedChecks;
  BookkeepingCertified: AcceptsEndorsedChecks;
  PlanningGroup: null;
  Affiliate: AcceptsEndorsedChecks;
  Industry: null;
  VatIDNum: null;
  DatevAccount: null;
  DatevFirstDataEntry: AcceptsEndorsedChecks;
  UseShippedGoodsAccount: AcceptsEndorsedChecks;
  GTSRegNo: null;
  GTSBankAccountNo: null;
  GTSBillingAddrTel: null;
  ETaxWebSite: null;
  HouseBankIBAN: string;
  VATRegistrationNumber: null;
  RepresentativeName: null;
  IndustryType: null;
  BusinessType: null;
  Series: number;
  AutomaticPosting: AutomaticPosting | null;
  InterestAccount: null;
  FeeAccount: null;
  CampaignNumber: null;
  AliasName: null;
  DefaultBlanketAgreementNumber: null;
  EffectiveDiscount: DiscountRelations;
  NoDiscounts: AcceptsEndorsedChecks;
  EffectivePrice: EffectivePrice;
  EffectivePriceConsidersPriceBeforeDiscount: AcceptsEndorsedChecks;
  GlobalLocationNumber: null;
  EDISenderID: null;
  EDIRecipientID: null;
  ResidenNumber: ResidenNumber;
  RelationshipCode: null;
  RelationshipDateFrom: null;
  RelationshipDateTill: null;
  UnifiedFederalTaxID: string;
  AttachmentEntry: null;
  TypeOfOperation: null;
  EndorsableChecksFromBP: AcceptsEndorsedChecks;
  AcceptsEndorsedChecks: AcceptsEndorsedChecks;
  OwnerCode: null;
  BlockSendingMarketingContent: AcceptsEndorsedChecks;
  AgentCode: null;
  PriceMode: null;
  EDocGenerationType: null;
  EDocStreet: null;
  EDocStreetNumber: null;
  EDocBuildingNumber: null;
  EDocZipCode: null;
  EDocCity: null;
  EDocCountry: null;
  EDocDistrict: null;
  EDocRepresentativeFirstName: null;
  EDocRepresentativeSurname: null;
  EDocRepresentativeCompany: null;
  EDocRepresentativeFiscalCode: null;
  EDocRepresentativeAdditionalId: null;
  EDocPECAddress: null;
  IPACodeForPA: null;
  UpdateDate: Date;
  UpdateTime: string;
  ExemptionMaxAmountValidationType: ExemptionMaxAmountValidationType;
  ECommerceMerchantID: null;
  UseBillToAddrToDetermineTax: AcceptsEndorsedChecks;
  CreateDate: Date;
  CreateTime: string;
  DefaultTransporterEntry: null;
  DefaultTransporterLineNumber: null;
  FCERelevant: AcceptsEndorsedChecks;
  FCEValidateBaseDelivery: AcceptsEndorsedChecks;
  MainUsage: null;
  EBooksVATExemptionCause: null;
  LegalText: null;
  DataVersion: number;
  ExchangeRateForIncomingPayment: AcceptsEndorsedChecks;
  ExchangeRateForOutgoingPayment: AcceptsEndorsedChecks;
  CertificateDetails: null;
  DefaultCurrency: null;
  EORINumber: null;
  FCEAsPaymentMeans: AcceptsEndorsedChecks;
  NotRelevantForMonthlyInvoice: AcceptsEndorsedChecks;
  U_EsAutorret: UEsAutorret;
  U_BPCO_RTC: UBpcoRTC;
  U_BPCO_TDC: string;
  U_BPCO_CS: string;
  U_BPCO_City: string;
  U_BPCO_TP: string;
  U_BPCO_Nombre: null | string;
  U_BPCO_1Apellido: null | string;
  U_BPCO_2Apellido: null | string;
  U_BPCO_BPExt: UBpco;
  U_BPCO_TBPE: UBpco;
  U_BPCO_Address: string;
  U_NIT_Extranjero: null;
  U_OK1_AC_ECO: null;
  U_Info_RUT: null | string;
  U_Matricula_M: null;
  U_Barrio_CC: null;
  U_Ciudad_CC: null;
  U_ZonaPostal_CC: null | string;
  U_Departamento_CC: null;
  U_Direccion_CC: null;
  U_Codigo_Pais_CC: Country | null;
  U_Pais_CC: UPaisCC | null;
  U_Tipo_Estable: null;
  U_Barrio_RUT: null;
  U_DocFormEnt: string;
  U_addInFaElectronica_email_contacto_FE: string;
  U_Celular: null | string;
  U_Cod_Ofi: null;
  U_Manejo: UManejo;
  U_IdCatTer: null;
  U_CSS_Dim3: UCSSDim3;
  U_CSS_AplAprobaciones: UCSSAPLAprobaciones;
  U_CSS_CCO_AUDP: null;
  U_FechaNac: null;
  U_FechaVenTarjFid: null;
  U_IDShopify: null;
  ElectronicProtocols: any[];
  BPAddresses: BPAddress[];
  ContactEmployees: ContactEmployee[];
  BPAccountReceivablePaybleCollection: any[];
  BPPaymentMethods: any[];
  BPWithholdingTaxCollection: any[];
  BPPaymentDates: any[];
  BPBranchAssignment: any[];
  BPBankAccounts: any[];
  BPFiscalTaxIDCollection: any[];
  DiscountGroups: any[];
  BPIntrastatExtension: BPIntrastatExtension;
  BPBlockSendingMarketingContents: any[];
  BPCurrenciesCollection: any[];
}

export enum AcceptsEndorsedChecks {
  TNO = 'tNO',
  TYES = 'tYES',
}

export enum AutomaticPosting {
  ApNo = 'apNo',
}

export interface BPAddress {
  AddressName: BilltoDefault;
  Street: string;
  Block: null | string;
  ZipCode: null | string;
  City: string;
  County: null;
  Country: Country;
  State: string;
  FederalTaxID: null;
  TaxCode: null;
  BuildingFloorRoom: null;
  AddressType: AddressType;
  AddressName2: null;
  AddressName3: null;
  TypeOfAddress: null;
  StreetNo: null;
  BPCode: string;
  RowNum: number;
  GlobalLocationNumber: null;
  Nationality: null;
  TaxOffice: null;
  GSTIN: null;
  GstType: null;
  CreateDate: Date;
  CreateTime: string;
  MYFType: null;
  TaasEnabled: AcceptsEndorsedChecks;
  U_Municipio: string;
  U_CodDepartamento: null | string;
}

export enum BilltoDefault {
  Principal = 'PRINCIPAL',
  SedePrincipal = 'Sede Principal',
  Sucursal1 = 'Sucursal1',
}

export enum AddressType {
  BoBillTo = 'bo_BillTo',
  BoShipTo = 'bo_ShipTo',
}

export enum Country {
  Co = 'CO',
}

export interface BPIntrastatExtension {}

export enum CardType {
  CCustomer = 'cCustomer',
}

export enum CompanyPrivate {
  CCompany = 'cCompany',
}

export interface ContactEmployee {
  CardCode: string;
  Name: string;
  Position: string;
  Address: null;
  Phone1: null;
  Phone2: null;
  MobilePhone: string;
  Fax: null;
  E_Mail: null;
  Pager: null;
  Remarks1: null;
  Remarks2: null;
  Password: null;
  InternalCode: number;
  PlaceOfBirth: null;
  DateOfBirth: null;
  Gender: string;
  Profession: null;
  Title: null;
  CityOfBirth: null;
  Active: AcceptsEndorsedChecks;
  FirstName: null;
  MiddleName: null;
  LastName: null;
  EmailGroupCode: null;
  BlockSendingMarketingContent: AcceptsEndorsedChecks;
  CreateDate: Date;
  CreateTime: string;
  UpdateDate: Date;
  UpdateTime: string;
  ConnectedAddressName: null;
  ConnectedAddressType: null;
  ForeignCountry: null;
  ContactEmployeeBlockSendingMarketingContents: any[];
}

export enum Currency {
  Cop = 'COP',
}

export enum DiscountBaseObject {
  DgboNone = 'dgboNone',
}

export enum DiscountRelations {
  DgrLowestDiscount = 'dgrLowestDiscount',
}

export enum EffectivePrice {
  EpDefaultPriority = 'epDefaultPriority',
}

export enum ExemptionMaxAmountValidationType {
  EmaIndividual = 'emaIndividual',
}

export enum FatherType {
  CPaymentsSum = 'cPayments_sum',
}

export enum OperationCode347 {
  OcSalesOrServicesRevenues = 'ocSalesOrServicesRevenues',
}

export enum ResidenNumber {
  RntSpanishFiscalID = 'rntSpanishFiscalID',
}

export enum ShaamGroup {
  SgServicesAndAsset = 'sgServicesAndAsset',
}

export enum SubjectToWithholdingTax {
  BoNO = 'boNO',
  BoYES = 'boYES',
}

export enum TaxRoundingRule {
  TrrCompanyDefault = 'trr_CompanyDefault',
}

export enum TypeReport {
  AtCompany = 'atCompany',
}

export enum UBpco {
  Empty = '-',
  The01 = '01',
}

export enum UBpcoRTC {
  RC = 'RC',
  Rs = 'RS',
}

export enum UCSSAPLAprobaciones {
  Y = 'Y',
}

export enum UCSSDim3 {
  Dir = 'DIR',
  Dist = 'DIST',
  Inst = 'INST',
}

export enum UEsAutorret {
  N = 'N',
}

export enum UManejo {
  Dia = 'DIA',
}

export enum UPaisCC {
  Colombia = 'COLOMBIA',
}

export enum VatLiable {
  VLiable = 'vLiable',
}
