import { SapBusinessPartner } from '../../domain/entities/sapBusinessPartner';
import {
  AcceptsEndorsedChecks,
  AddressType,
  BilltoDefault,
  Country,
  SapBusinessPartnerRaw,
} from './types/sapBusinessPartnerRaw';

export const mapToSapBusinessPartner = (raw: SapBusinessPartnerRaw): SapBusinessPartner => {
  return {
    code: raw.CardCode,
    name: raw.CardName,
    groupCode: raw.GroupCode,
    address: raw.Address,
    phone: raw.Phone1,
    federalTaxId: raw.FederalTaxID,
    city: raw.City,
    email: raw.EmailAddress,

    // Campos personalizados para Colombia
    U_EsAutorret: raw.U_EsAutorret,
    U_BPCO_RTC: raw.U_BPCO_RTC,
    U_BPCO_TDC: raw.U_BPCO_TDC,
    U_BPCO_CS: raw.U_BPCO_CS,
    U_BPCO_City: raw.U_BPCO_City,
    U_BPCO_TP: raw.U_BPCO_TP,
    U_BPCO_Nombre: raw.U_BPCO_Nombre,
    U_BPCO_1Apellido: raw.U_BPCO_1Apellido,
    U_BPCO_2Apellido: raw.U_BPCO_2Apellido,
    U_BPCO_Address: raw.U_BPCO_Address,
    U_Info_RUT: raw.U_Info_RUT,
    U_addInFaElectronica_email_contacto_FE: raw.U_addInFaElectronica_email_contacto_FE,
    U_Celular: raw.U_Celular,

    // Direcciones
    addresses:
      raw.BPAddresses?.map(addr => ({
        AddressName: addr.AddressName?.toString() || null,
        Street: addr.Street,
        Block: addr.Block?.toString() || null,
        ZipCode: addr.ZipCode?.toString() || null,
        City: addr.City,
        County: addr.County?.toString() || null,
        Country: addr.Country?.toString() || null,
        State: addr.State,
        FederalTaxID: addr.FederalTaxID?.toString() || null,
        TaxCode: addr.TaxCode?.toString() || null,
        BuildingFloorRoom: addr.BuildingFloorRoom?.toString() || null,
        AddressType: addr.AddressType?.toString() || null,
        AddressName2: addr.AddressName2?.toString() || null,
        AddressName3: addr.AddressName3?.toString() || null,
        TypeOfAddress: addr.TypeOfAddress?.toString() || null,
        BPCode: addr.BPCode,
        GlobalLocationNumber: addr.GlobalLocationNumber?.toString() || null,
        Nationality: addr.Nationality?.toString() || null,
        TaxOffice: addr.TaxOffice?.toString() || null,
        GSTIN: addr.GSTIN?.toString() || null,
        GstType: addr.GstType?.toString() || null,
        CreateDate: addr.CreateDate?.toString() || null,
        CreateTime: addr.CreateTime,
        MYFType: addr.MYFType?.toString() || null,
        TaasEnabled: addr.TaasEnabled?.toString() || null,
        U_Municipio: addr.U_Municipio,
        U_CodDepartamento: addr.U_CodDepartamento,
      })) || [],
  };
};

export const mapFromSapBusinessPartner = (
  partner: SapBusinessPartner
): Partial<SapBusinessPartnerRaw> => {
  const result: Partial<SapBusinessPartnerRaw> = {
    // Datos básicos
    CardCode: partner.code,
    CardName: partner.name,
    GroupCode: partner.groupCode,
    Address: partner.address,
    Phone1: partner.phone,
    FederalTaxID: partner.federalTaxId,
    City: partner.city,
    EmailAddress: partner.email,

    // Campos personalizados para Colombia
    U_EsAutorret: partner.U_EsAutorret,
    U_BPCO_RTC: partner.U_BPCO_RTC,
    U_BPCO_TDC: partner.U_BPCO_TDC,
    U_BPCO_CS: partner.U_BPCO_CS,
    U_BPCO_City: partner.U_BPCO_City,
    U_BPCO_TP: partner.U_BPCO_TP,
    U_BPCO_Nombre: partner.U_BPCO_Nombre,
    U_BPCO_1Apellido: partner.U_BPCO_1Apellido,
    U_BPCO_2Apellido: partner.U_BPCO_2Apellido,
    U_BPCO_Address: partner.U_BPCO_Address,
    U_Info_RUT: partner.U_Info_RUT,
    U_addInFaElectronica_email_contacto_FE: partner.U_addInFaElectronica_email_contacto_FE,
    U_Celular: partner.U_Celular,

    BPAddresses:
      (partner.addresses &&
        partner.addresses.map((addr, index) => ({
          AddressName: (addr.AddressName as BilltoDefault) || BilltoDefault.Principal,
          Street: addr.Street || '',
          Block: addr.Block,
          ZipCode: addr.ZipCode,
          City: addr.City || '',
          County: addr.County as string | number | null,
          Country: (addr.Country as Country) || Country.Co,
          State: addr.State || '',
          FederalTaxID: addr.FederalTaxID as string | number | null,
          TaxCode: addr.TaxCode as string | number | null,
          BuildingFloorRoom: addr.BuildingFloorRoom as string | number | null,
          AddressType: (addr.AddressType as AddressType) || AddressType.BoBillTo,
          AddressName2: addr.AddressName2 as string | number | null,
          AddressName3: addr.AddressName3 as string | number | null,
          TypeOfAddress: addr.TypeOfAddress as string | number | null,

          StreetNo: null,
          RowNum: index,
          BPCode: addr.BPCode,
          GlobalLocationNumber: addr.GlobalLocationNumber as string | number | null,
          Nationality: addr.Nationality as string | number | null,
          TaxOffice: addr.TaxOffice as string | number | null,
          GSTIN: addr.GSTIN as string | number | null,
          GstType: addr.GstType as string | number | null,
          CreateDate: addr.CreateDate ? new Date(addr.CreateDate) : new Date(),
          CreateTime: addr.CreateTime || '000000',
          MYFType: addr.MYFType as string | number | null,
          TaasEnabled: (addr.TaasEnabled as AcceptsEndorsedChecks) || AcceptsEndorsedChecks.TNO,
          U_Municipio: addr.U_Municipio || '',
          U_CodDepartamento: addr.U_CodDepartamento,
        }))) ||
      [],
  };

  return result;
};
