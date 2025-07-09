export interface SapBusinessPartner {
  code: string;
  name: string;
  type: string;
  groupCode: number;

  address?: string;
  mailAddress?: string;
  phone?: string;
  mobile?: string;
  email?: string;

  federalTaxId?: string;
  vatLiable?: string;
  city?: string;
  country?: string;
  block?: string;

  currency?: string;
  currentBalance?: number;
  openDeliveryBalance?: number;
  openOrdersBalance?: number;

  createdAt?: {
    date?: string;
    time?: string;
  };
  updatedAt?: {
    date?: string;
    time?: string;
  };

  addresses?: Array<{
    name: string;
    street: string;
    block?: string;
    city: string;
    country: string;
    type: string;
    businessPartnerCode: string;
    rowNumber: number;
    createdAt: {
      date: string;
      time: string;
    };
  }>;

  contacts?: Array<{
    name?: string;
    position?: string;
    address?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    isActive?: boolean;
  }>;
}
