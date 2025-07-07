import { SapBusinessPartner } from '../types/businessPartner';
import {
  BusinessPartnerDto,
  BusinessPartnerAddressDto,
  BusinessPartnerContactDto,
} from '../../../interfaces/http/dto/sapBusinessPartnerDto';

/**
 * Mapea un socio comercial de SAP a un DTO para la API
 * @param partner Socio comercial de SAP
 * @returns DTO del socio comercial
 */
export function mapSapBusinessPartnerToDto(partner: SapBusinessPartner): BusinessPartnerDto {
  // Mapeo de direcciones
  const addresses: BusinessPartnerAddressDto[] =
    partner.BPAddresses?.map(address => ({
      name: address.AddressName,
      street: address.Street,
      block: address.Block,
      city: address.City,
      country: address.Country,
      type: address.AddressType === 'bo_ShipTo' ? 'shipping' : 'billing',
    })) || [];

  // Mapeo de contactos
  const contacts: BusinessPartnerContactDto[] =
    partner.ContactEmployees?.map(contact => ({
      name: contact.Name,
      position: contact.Position,
      phone: contact.Phone1,
      mobile: contact.MobilePhone,
      email: contact.E_Mail,
      active: contact.Active === 'Y',
    })) || [];

  // Mapeo del tipo de socio comercial
  let type = 'customer';
  switch (partner.CardType) {
    case 'cCustomer':
      type = 'customer';
      break;
    case 'cSupplier':
      type = 'supplier';
      break;
    case 'cLid':
      type = 'lead';
      break;
  }

  // Mapeo del socio comercial principal
  return {
    code: partner.CardCode,
    name: partner.CardName,
    type,
    address: partner.Address,
    phone: partner.Phone1,
    mobile: partner.Cellular,
    email: partner.EmailAddress,
    taxId: partner.FederalTaxID,
    city: partner.City,
    country: partner.Country,
    currency: partner.Currency,
    isVatLiable: partner.VatLiable === 'vLiable',
    block: partner.Block,
    createdAt: partner.CreateDate
      ? `${partner.CreateDate.split('T')[0]} ${partner.CreateTime}`
      : undefined,
    updatedAt: partner.UpdateDate
      ? `${partner.UpdateDate.split('T')[0]} ${partner.UpdateTime}`
      : undefined,
    addresses,
    contacts,
    accountBalance: partner.CurrentAccountBalance,
    deliveryNotesBalance: partner.OpenDeliveryNotesBalance,
    ordersBalance: partner.OpenOrdersBalance,
  };
}
