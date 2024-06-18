class businessPartnersService {
  constructor() {
    this.businessPartners = [];
  }

  addBusinessPartner(businessPartner) {
    this.businessPartners.push(businessPartner);
  }

  getBusinessPartners() {
    return this.businessPartners;
  }
}
