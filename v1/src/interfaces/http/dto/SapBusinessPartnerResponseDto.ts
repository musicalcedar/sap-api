import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';

export interface AddressDto {
  addressType: string;
  street: string;
  block?: string;
  city: string;
  state?: string;
  country: string;
  zipCode?: string;
  buildingFloorRoom?: string;
  municipio?: string;
  departamento?: string;
  isDefault: boolean;
}

export interface ContactEmployeeDto {
  id?: number;
  name?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  address?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  isActive: boolean;
}

export interface SapBusinessPartnerResponseDto {
  // Datos básicos
  cardCode: string;
  cardName: string;
  cardType: string;
  groupCode: number;
  
  // Datos de contacto
  contactPerson?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  
  // Datos de dirección
  address?: string;
  mailAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  block?: string;
  
  // Datos fiscales
  federalTaxId?: string;
  vatLiable?: string;
  
  // Datos financieros
  currency?: string;
  creditLimit?: number;
  maxCommitment?: number;
  discountPercent?: number;
  priceList?: number;
  paymentTerms?: number;
  
  // Saldos
  balance?: number;
  openDeliveryBalance?: number;
  openOrdersBalance?: number;
  openChecksBalance?: number;
  
  // Configuración de ventas
  salesPersonCode?: number;
  backOrder?: boolean;
  partialDelivery?: boolean;
  
  // Estados
  isActive?: boolean;
  isFrozen?: boolean;
  
  // Campos personalizados para Colombia
  municipio?: string;
  departamento?: string;
  regimenTributario?: string;
  tipoContribuyente?: string;
  actividadEconomica?: string;
  
  // Colecciones
  addresses: AddressDto[];
  contactEmployees: ContactEmployeeDto[];
  
  // Fechas
  createdAt?: string;
  updatedAt?: string;
}

export const mapBusinessPartnerToDto = (
  partner: SapBusinessPartner
): SapBusinessPartnerResponseDto => {
  const createdAt = partner.createdAt
    ? `${partner.createdAt.date}T${partner.createdAt.time}`
    : undefined;

  const updatedAt = partner.updatedAt
    ? `${partner.updatedAt.date}T${partner.updatedAt.time}`
    : undefined;

  return {
    // Datos básicos
    cardCode: partner.code,
    cardName: partner.name,
    cardType: partner.type,
    groupCode: partner.groupCode,
    
    // Datos de contacto
    contactPerson: partner.contactPerson,
    phone: partner.phone,
    mobile: partner.mobile,
    email: partner.email,
    
    // Datos de dirección
    address: partner.address,
    mailAddress: partner.mailAddress,
    city: partner.city,
    state: partner.state,
    country: partner.country,
    zipCode: partner.zipCode,
    block: partner.block,
    
    // Datos fiscales
    federalTaxId: partner.federalTaxId,
    vatLiable: partner.vatLiable,
    
    // Datos financieros
    currency: partner.currency,
    creditLimit: partner.creditLimit,
    maxCommitment: partner.maxCommitment,
    discountPercent: partner.discountPercent,
    priceList: partner.priceList,
    paymentTerms: partner.paymentTerms,
    
    // Saldos
    balance: partner.currentBalance,
    openDeliveryBalance: partner.openDeliveryBalance,
    openOrdersBalance: partner.openOrdersBalance,
    openChecksBalance: partner.openChecksBalance,
    
    // Configuración de ventas
    salesPersonCode: partner.salesPersonCode,
    backOrder: partner.backOrder,
    partialDelivery: partner.partialDelivery,
    
    // Estados
    isActive: partner.isActive,
    isFrozen: partner.isFrozen,
    
    // Campos personalizados para Colombia (con nombres semánticos)
    municipio: partner.U_Ciudad_CC,
    departamento: partner.U_Departamento_CC,
    regimenTributario: partner.U_BPCO_RTC,
    tipoContribuyente: partner.U_BPCO_TP,
    actividadEconomica: partner.U_OK1_AC_ECO,
    
    // Colecciones
    addresses: partner.addresses?.map(address => ({
      addressType: address.type,
      street: address.street,
      block: address.block,
      city: address.city,
      state: address.state,
      country: address.country,
      zipCode: address.zipCode,
      buildingFloorRoom: address.buildingFloorRoom,
      municipio: address.U_Municipio,
      departamento: address.U_CodDepartamento,
      isDefault: address.type === 'bo_BillTo',
    })) || [],
    
    contactEmployees: partner.contacts?.map(contact => ({
      id: contact.internalCode,
      name: contact.name,
      firstName: contact.firstName,
      lastName: contact.lastName,
      position: contact.position,
      address: contact.address,
      email: contact.email,
      phone: contact.phone,
      mobile: contact.mobile,
      isActive: contact.isActive || false,
    })) || [],
    
    createdAt,
    updatedAt,
  };
};

export const mapBusinessPartnersToDto = (
  partners: SapBusinessPartner[]
): SapBusinessPartnerResponseDto[] => {
  return partners.map(mapBusinessPartnerToDto);
};
