export interface SapBusinessPartner {
  // Datos básicos (esenciales para identificación)
  code: string;
  name: string;
  type: string;
  groupCode: number;

  // Datos de contacto (importantes para comunicación)
  phone?: string;
  mobile?: string;
  email?: string;
  contactPerson?: string;

  // Datos de dirección (importantes para envíos y facturación)
  address?: string;
  mailAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  block?: string;

  // Datos fiscales (importantes para facturación)
  federalTaxId?: string;
  vatLiable?: string;

  // Datos financieros (importantes para crédito y precios)
  currency?: string;
  creditLimit?: number;
  maxCommitment?: number;
  discountPercent?: number;
  priceList?: number;
  paymentTerms?: number;

  // Saldos (importantes para consultas financieras)
  currentBalance?: number;
  openDeliveryBalance?: number;
  openOrdersBalance?: number;
  openChecksBalance?: number;

  // Configuración de ventas (importantes para órdenes y cotizaciones)
  salesPersonCode?: number;
  backOrder?: boolean;
  partialDelivery?: boolean;

  // Estados (importantes para validación)
  isActive?: boolean;
  isFrozen?: boolean;

  // Campos personalizados para Colombia (importantes para localización)
  U_Ciudad_CC?: string;
  U_Departamento_CC?: string;
  U_BPCO_RTC?: string; // Régimen tributario
  U_BPCO_TP?: string; // Tipo de contribuyente
  U_OK1_AC_ECO?: string; // Actividad económica

  // Fechas (importantes para auditoría)
  createdAt?: {
    date?: string;
    time?: string;
  };
  updatedAt?: {
    date?: string;
    time?: string;
  };

  // Direcciones detalladas (importantes para envíos y facturación)
  addresses?: Array<{
    name: string;
    street: string;
    block?: string;
    city: string;
    state?: string;
    country: string;
    zipCode?: string;
    type: string;
    businessPartnerCode: string;
    rowNumber: number;
    buildingFloorRoom?: string;
    U_Municipio?: string;
    U_CodDepartamento?: string;
    createdAt: {
      date: string;
      time: string;
    };
  }>;

  // Contactos (importantes para comunicación)
  contacts?: Array<{
    name?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    address?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    isActive?: boolean;
    internalCode?: number;
  }>;
}
