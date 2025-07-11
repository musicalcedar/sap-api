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
): Partial<SapBusinessPartnerResponseDto> => {
  return {
    // Datos básicos
    cardCode: partner.code,
    cardName: partner.name,

    groupCode: partner.groupCode,

    // Datos de contacto
    phone: partner.phone,
    email: partner.email,

    // Datos de dirección
    address: partner.address,
    city: partner.city,

    // Datos fiscales
    federalTaxId: partner.federalTaxId,
  };
};

export const mapBusinessPartnersToDto = (
  partners: SapBusinessPartner[]
): Partial<SapBusinessPartnerResponseDto>[] => {
  return partners.map(mapBusinessPartnerToDto);
};
