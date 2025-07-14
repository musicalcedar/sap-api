export interface SapBusinessPartner {
  code: string; // Se repite en el array de BPAddresses en los campos BPCode
  name: string;
  groupCode: number;
  address: string; // se repite en MailAddress U_BPCO_Address y en el array de BPAddresses en los campos Street
  phone: string; // se repite en Cellular y U_Celular
  federalTaxId: string; // se repite en U_Info_RUT
  city: string; // se repite en MailCity enn el array de BPAddresses en los campos City y U_BPCO_City
  email: string; // se repite en U_addInFaElectronica_email_contacto_FE
  department?: string; // Nombre del departamento (ej: "ANTIOQUIA", "BOGOTA")

  // Campos personalizados para Colombia
  U_EsAutorret: string | null;
  U_BPCO_RTC: string | null;
  U_BPCO_TDC: string | null;
  U_BPCO_CS: string | null;
  U_BPCO_City: string | null;
  U_BPCO_TP: string | null;
  U_BPCO_Nombre: string | null;
  U_BPCO_1Apellido: string | null;
  U_BPCO_2Apellido: string | null;
  U_BPCO_Address: string | null;
  U_Info_RUT: string | null;
  U_addInFaElectronica_email_contacto_FE: string | null;
  U_Celular: string | null;

  addresses: Array<{
    AddressName: string | null;
    Street: string | null;
    Block: string | null;
    ZipCode: string | null;
    City: string | null;
    County: string | null;
    Country: string | null;
    State: string | null;
    FederalTaxID: string | null;
    TaxCode: string | null;
    BuildingFloorRoom: string | null;
    AddressType: string | null;
    AddressName2: string | null;
    AddressName3: string | null;
    TypeOfAddress: string | null;
    RowNum: number | null;
    BPCode: string;
    GlobalLocationNumber: string | null;
    Nationality: string | null;
    TaxOffice: string | null;
    GSTIN: string | null;
    GstType: string | null;
    CreateDate?: string | null;
    CreateTime?: string | null;
    MYFType: string | null;
    TaasEnabled: string | null;
    U_Municipio: string | null;
    U_CodDepartamento: string | null;
  }>;
}
