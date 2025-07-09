import { SapBusinessPartner } from '@/domain/entities/sapBusinessPartner';

export interface AddressDto {
  addressType: string;
  street: string;
  city: string;
  state?: string;
  country: string;
  zipCode?: string;
  isDefault: boolean;
}

export interface ContactEmployeeDto {
  id?: number;
  name: string;
  position?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  isActive: boolean;
}

export interface SapBusinessPartnerResponseDto {
  cardCode: string;
  cardName: string;
  cardType: string;
  groupCode?: number;
  federalTaxId?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  website?: string;
  currency?: string;
  balance?: number;
  openDeliveryBalance?: number;
  openOrdersBalance?: number;
  addresses: AddressDto[];
  contactEmployees: ContactEmployeeDto[];
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
    cardCode: partner.code,
    cardName: partner.name,
    cardType: partner.type,
    groupCode: partner.groupCode,
    federalTaxId: partner.federalTaxId,
    phone: partner.phone,
    mobile: partner.mobile,
    email: partner.email,
    website: undefined, // No existe en la nueva estructura
    currency: partner.currency,
    balance: partner.currentBalance,
    openDeliveryBalance: partner.openDeliveryBalance,
    openOrdersBalance: partner.openOrdersBalance,
    addresses:
      partner.addresses?.map(address => ({
        addressType: address.type,
        street: address.street || '',
        city: address.city || '',
        state: undefined, // No existe en la nueva estructura
        country: address.country || '',
        zipCode: undefined, // No existe en la nueva estructura
        isDefault: address.type === 'bo_BillTo',
      })) || [],
    contactEmployees:
      partner.contacts?.map(contact => ({
        name: contact.name || '',
        position: contact.position,
        email: contact.email,
        phone: contact.phone,
        mobile: contact.mobile,
        isActive: contact.isActive || false,
      })) || [],
    createdAt,
    updatedAt,
  };
};

export const mapBusinessPartnersToDtos = (
  partners: SapBusinessPartner[]
): SapBusinessPartnerResponseDto[] => {
  return partners.map(mapBusinessPartnerToDto);
};
