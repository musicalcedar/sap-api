export interface SapBusinessPartnerResponse {
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
  Fax: string | number | null;
  ContactPerson: null | string;
  Notes: string | number | null;
  PayTermsGrpCode: number;
  CreditLimit: number;
  MaxCommitment: number;
  DiscountPercent: number;
  VatLiable: VatLiable;
  FederalTaxID: string;
  DeductibleAtSource: boolResponse;
  DeductionPercent: number;
  DeductionValidUntil: string | number | null;
  PriceListNum: number;
  IntrestRatePercent: number;
  CommissionPercent: number;
  CommissionGroupCode: number;
  FreeText: string | number | null;
  SalesPersonCode: number;
  Currency: Currency;
  RateDiffAccount: null | string;
  Cellular: null | string;
  AvarageLate: string | number | null;
  City: string;
  County: string | number | null;
  Country: Country;
  MailCity: string;
  MailCounty: string | number | null;
  MailCountry: Country;
  EmailAddress: string;
  Picture: string | number | null;
  DefaultAccount: string | number | null;
  DefaultBranch: string | number | null;
  DefaultBankCode: string;
  AdditionalID: string | number | null;
  Pager: string | number | null;
  FatherCard: string | number | null;
  CardForeignName: string | number | null;
  FatherType: FatherType;
  DeductionOffice: string | number | null;
  ExportCode: string | number | null;
  MinIntrest: number;
  CurrentAccountBalance: number;
  OpenDeliveryNotesBalance: number;
  OpenOrdersBalance: number;
  OpenChecksBalance: number;
  VatGroup: string | number | null;
  ShippingType: string | number | null;
  Password: string | number | null;
  Indicator: string | number | null;
  IBAN: string | number | null;
  CreditCardCode: number;
  CreditCardNum: string | number | null;
  CreditCardExpiration: string | number | null;
  DebitorAccount: string;
  OpenOpportunities: string | number | null;
  Valid: boolResponse;
  ValidFrom: string | number | null;
  ValidTo: string | number | null;
  ValidRemarks: string | number | null;
  Frozen: boolResponse;
  FrozenFrom: string | number | null;
  FrozenTo: string | number | null;
  FrozenRemarks: string | number | null;
  Block: null | string;
  BillToState: string;
  ShipToState: string;
  ExemptNum: string | number | null;
  Priority: number;
  FormCode1099: string | number | null;
  Box1099: string | number | null;
  PeymentMethodCode: string | number | null;
  BackOrder: boolResponse;
  PartialDelivery: boolResponse;
  BlockDunning: boolResponse;
  BankCountry: Country | null;
  HouseBank: string | number | null;
  HouseBankCountry: Country | null;
  HouseBankAccount: string | number | null;
  ShipToDefault: BilltoDefault;
  DunningLevel: string | number | null;
  DunningDate: string | number | null;
  CollectionAuthorization: boolResponse;
  DME: string | number | null;
  InstructionKey: string | number | null;
  SinglePayment: boolResponse;
  ISRBillerID: string | number | null;
  PaymentBlock: boolResponse;
  ReferenceDetails: string | number | null;
  HouseBankBranch: string | number | null;
  OwnerIDNumber: string | number | null;
  PaymentBlockDescription: number;
  TaxExemptionLetterNum: string | number | null;
  MaxAmountOfExemption: number;
  ExemptionValidityDateFrom: string | number | null;
  ExemptionValidityDateTo: string | number | null;
  LinkedBusinessPartner: string | number | null;
  LastMultiReconciliationNum: string | number | null;
  DeferredTax: boolResponse;
  Equalization: boolResponse;
  SubjectToWithholdingTax: SubjectToWithholdingTax;
  CertificateNumber: string | number | null;
  ExpirationDate: string | number | null;
  NationalInsuranceNum: string | number | null;
  AccrualCriteria: boolResponse;
  WTCode: string | number | null;
  BillToBuildingFloorRoom: null | string;
  DownPaymentClearAct: string;
  ChannelBP: string | number | null;
  DefaultTechnician: string | number | null;
  BilltoDefault: BilltoDefault;
  CustomerBillofExchangDisc: string | number | null;
  Territory: number | null;
  ShipToBuildingFloorRoom: null | string;
  CustomerBillofExchangPres: string | number | null;
  ProjectCode: string | number | null;
  VatGroupLatinAmerica: string | number | null;
  DunningTerm: string | number | null;
  Website: string | number | null;
  OtherReceivablePayable: string | number | null;
  BillofExchangeonCollection: string | number | null;
  CompanyPrivate: CompanyPrivate;
  LanguageCode: number;
  UnpaidBillofExchange: string | number | null;
  WithholdingTaxDeductionGroup: number;
  ClosingDateProcedureNumber: string | number | null;
  Profession: string | number | null;
  BankChargesAllocationCode: string | number | null;
  TaxRoundingRule: TaxRoundingRule;
  Properties1: boolResponse;
  Properties2: boolResponse;
  Properties3: boolResponse;
  Properties4: boolResponse;
  Properties5: boolResponse;
  Properties6: boolResponse;
  Properties7: boolResponse;
  Properties8: boolResponse;
  Properties9: boolResponse;
  Properties10: boolResponse;
  Properties11: boolResponse;
  Properties12: boolResponse;
  Properties13: boolResponse;
  Properties14: boolResponse;
  Properties15: boolResponse;
  Properties16: boolResponse;
  Properties17: boolResponse;
  Properties18: boolResponse;
  Properties19: boolResponse;
  Properties20: boolResponse;
  Properties21: boolResponse;
  Properties22: boolResponse;
  Properties23: boolResponse;
  Properties24: boolResponse;
  Properties25: boolResponse;
  Properties26: boolResponse;
  Properties27: boolResponse;
  Properties28: boolResponse;
  Properties29: boolResponse;
  Properties30: boolResponse;
  Properties31: boolResponse;
  Properties32: boolResponse;
  Properties33: boolResponse;
  Properties34: boolResponse;
  Properties35: boolResponse;
  Properties36: boolResponse;
  Properties37: boolResponse;
  Properties38: boolResponse;
  Properties39: boolResponse;
  Properties40: boolResponse;
  Properties41: boolResponse;
  Properties42: boolResponse;
  Properties43: boolResponse;
  Properties44: boolResponse;
  Properties45: boolResponse;
  Properties46: boolResponse;
  Properties47: boolResponse;
  Properties48: boolResponse;
  Properties49: boolResponse;
  Properties50: boolResponse;
  Properties51: boolResponse;
  Properties52: boolResponse;
  Properties53: boolResponse;
  Properties54: boolResponse;
  Properties55: boolResponse;
  Properties56: boolResponse;
  Properties57: boolResponse;
  Properties58: boolResponse;
  Properties59: boolResponse;
  Properties60: boolResponse;
  Properties61: boolResponse;
  Properties62: boolResponse;
  Properties63: boolResponse;
  Properties64: boolResponse;
  CompanyRegistrationNumber: string | number | null;
  VerificationNumber: string | number | null;
  DiscountBaseObject: DiscountBaseObject;
  DiscountRelations: DiscountRelations;
  TypeReport: TypeReport;
  ThresholdOverlook: boolResponse;
  SurchargeOverlook: boolResponse;
  Remark1: string | number | null;
  ConCerti: string | number | null;
  DownPaymentInterimAccount: null | string;
  OperationCode347: OperationCode347;
  InsuranceOperation347: boolResponse;
  HierarchicalDeduction: boolResponse;
  ShaamGroup: ShaamGroup;
  WithholdingTaxCertified: boolResponse;
  BookkeepingCertified: boolResponse;
  PlanningGroup: string | number | null;
  Affiliate: boolResponse;
  Industry: string | number | null;
  VatIDNum: string | number | null;
  DatevAccount: string | number | null;
  DatevFirstDataEntry: boolResponse;
  UseShippedGoodsAccount: boolResponse;
  GTSRegNo: string | number | null;
  GTSBankAccountNo: string | number | null;
  GTSBillingAddrTel: string | number | null;
  ETaxWebSite: string | number | null;
  HouseBankIBAN: string;
  VATRegistrationNumber: string | number | null;
  RepresentativeName: string | number | null;
  IndustryType: string | number | null;
  BusinessType: string | number | null;
  Series: number;
  AutomaticPosting: AutomaticPosting | null;
  InterestAccount: string | number | null;
  FeeAccount: string | number | null;
  CampaignNumber: string | number | null;
  AliasName: string | number | null;
  DefaultBlanketAgreementNumber: string | number | null;
  EffectiveDiscount: DiscountRelations;
  NoDiscounts: boolResponse;
  EffectivePrice: EffectivePrice;
  EffectivePriceConsidersPriceBeforeDiscount: boolResponse;
  GlobalLocationNumber: string | number | null;
  EDISenderID: string | number | null;
  EDIRecipientID: string | number | null;
  ResidenNumber: ResidenNumber;
  RelationshipCode: string | number | null;
  RelationshipDateFrom: string | number | null;
  RelationshipDateTill: string | number | null;
  UnifiedFederalTaxID: string;
  AttachmentEntry: string | number | null;
  TypeOfOperation: string | number | null;
  EndorsableChecksFromBP: boolResponse;
  boolResponse: boolResponse;
  OwnerCode: string | number | null;
  BlockSendingMarketingContent: boolResponse;
  AgentCode: string | number | null;
  PriceMode: string | number | null;
  EDocGenerationType: string | number | null;
  EDocStreet: string | number | null;
  EDocStreetNumber: string | number | null;
  EDocBuildingNumber: string | number | null;
  EDocZipCode: string | number | null;
  EDocCity: string | number | null;
  EDocCountry: string | number | null;
  EDocDistrict: string | number | null;
  EDocRepresentativeFirstName: string | number | null;
  EDocRepresentativeSurname: string | number | null;
  EDocRepresentativeCompany: string | number | null;
  EDocRepresentativeFiscalCode: string | number | null;
  EDocRepresentativeAdditionalId: string | number | null;
  EDocPECAddress: string | number | null;
  IPACodeForPA: string | number | null;
  UpdateDate: Date;
  UpdateTime: string;
  ExemptionMaxAmountValidationType: ExemptionMaxAmountValidationType;
  ECommerceMerchantID: string | number | null;
  UseBillToAddrToDetermineTax: boolResponse;
  CreateDate: Date;
  CreateTime: string;
  DefaultTransporterEntry: string | number | null;
  DefaultTransporterLineNumber: string | number | null;
  FCERelevant: boolResponse;
  FCEValidateBaseDelivery: boolResponse;
  MainUsage: string | number | null;
  EBooksVATExemptionCause: string | number | null;
  LegalText: string | number | null;
  DataVersion: number;
  ExchangeRateForIncomingPayment: boolResponse;
  ExchangeRateForOutgoingPayment: boolResponse;
  CertificateDetails: string | number | null;
  DefaultCurrency: string | number | null;
  EORINumber: string | number | null;
  FCEAsPaymentMeans: boolResponse;
  NotRelevantForMonthlyInvoice: boolResponse;
  U_EsAutorret: string | null;
  U_BPCO_RTC: string | null;
  U_BPCO_TDC: string | null;
  U_BPCO_CS: string | null;
  U_BPCO_City: string | null;
  U_BPCO_TP: string | null;
  U_BPCO_Nombre: string | null;
  U_BPCO_1Apellido: string | null;
  U_BPCO_2Apellido: string | null;
  U_BPCO_BPExt: UBpco;
  U_BPCO_TBPE: UBpco;
  U_BPCO_Address: string | null;
  U_NIT_Extranjero: string | number | null;
  U_OK1_AC_ECO: string | number | null;
  U_Info_RUT: string | null;
  U_Matricula_M: string | number | null;
  U_Barrio_CC: string | number | null;
  U_Ciudad_CC: string | number | null;
  U_ZonaPostal_CC: null | string;
  U_Departamento_CC: string | number | null;
  U_Direccion_CC: string | number | null;
  U_Codigo_Pais_CC: Country | null;
  U_Pais_CC: UPaisCC | null;
  U_Tipo_Estable: string | number | null;
  U_Barrio_RUT: string | number | null;
  U_DocFormEnt: string;
  U_addInFaElectronica_email_contacto_FE: string | null;
  U_Celular: null | string;
  U_Cod_Ofi: string | number | null;
  U_Manejo: UManejo;
  U_IdCatTer: string | number | null;
  U_CSS_Dim3: UCSSDim3;
  U_CSS_AplAprobaciones: UCSSAPLAprobaciones;
  U_CSS_CCO_AUDP: string | number | null;
  U_FechaNac: string | number | null;
  U_FechaVenTarjFid: string | number | null;
  U_IDShopify: string | number | null;
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

export enum boolResponse {
  TNO = 'tNO',
  TYES = 'tYES',
}

export enum AutomaticPosting {
  ApNo = 'apNo',
}

export interface BPAddress {
  AddressName: string;
  Street: string;
  Block: null | string;
  ZipCode: null | string;
  City: string;
  County: string | number | null;
  Country: string;
  State: string;
  FederalTaxID: string | number | null;
  TaxCode: string | number | null;
  BuildingFloorRoom: string | number | null;
  AddressType: string;
  AddressName2: string | number | null;
  AddressName3: string | number | null;
  TypeOfAddress: string | number | null;
  StreetNo?: string | number | null;
  BPCode: string;
  RowNum: number | null;
  GlobalLocationNumber: string | number | null;
  Nationality: string | number | null;
  TaxOffice: string | number | null;
  GSTIN: string | number | null;
  GstType: string | number | null;
  CreateDate?: string | null;
  CreateTime?: string | null;
  MYFType: string | number | null;
  TaasEnabled: string;
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
  Address: string | number | null;
  Phone1: string | number | null;
  Phone2: string | number | null;
  MobilePhone: string;
  Fax: string | number | null;
  E_Mail: string | number | null;
  Pager: string | number | null;
  Remarks1: string | number | null;
  Remarks2: string | number | null;
  Password: string | number | null;
  InternalCode: number;
  PlaceOfBirth: string | number | null;
  DateOfBirth: string | number | null;
  Gender: string;
  Profession: string | number | null;
  Title: string | number | null;
  CityOfBirth: string | number | null;
  Active: boolResponse;
  FirstName: string | number | null;
  MiddleName: string | number | null;
  LastName: string | number | null;
  EmailGroupCode: string | number | null;
  BlockSendingMarketingContent: boolResponse;
  CreateDate?: Date;
  CreateTime?: string;
  UpdateDate?: Date;
  UpdateTime?: string;
  ConnectedAddressName: string | number | null;
  ConnectedAddressType: string | number | null;
  ForeignCountry: string | number | null;
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
