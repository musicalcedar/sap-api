/**
 * DTO para socios comerciales que se expone en la API
 */

// Dirección del socio comercial
export interface BusinessPartnerAddressDto {
  name: string;
  street: string;
  block?: string;
  city: string;
  country: string;
  type: string;
}

// Contacto del socio comercial
export interface BusinessPartnerContactDto {
  name?: string;
  position?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  active?: boolean;
}

// DTO principal para el socio comercial
export interface BusinessPartnerDto {
  code: string;
  name: string;
  type: string;
  address?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  taxId?: string;
  city?: string;
  country?: string;
  currency?: string;
  isVatLiable?: boolean;
  block?: string;
  createdAt?: string;
  updatedAt?: string;
  addresses?: BusinessPartnerAddressDto[];
  contacts?: BusinessPartnerContactDto[];
  accountBalance?: number;
  deliveryNotesBalance?: number;
  ordersBalance?: number;
}
