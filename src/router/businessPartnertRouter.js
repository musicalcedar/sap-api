const express = require("express");
const {
  getBusinessPartners,
  getBusinessPartnerById,
} = require("../service/SAP/businessPartnerService");

const businessPartnersRouter = express.Router();

businessPartnersRouter.get("/", async (req, res, next) => {
  try {
    const businessPartnerts = await getBusinessPartners();
    res.status(200).json(businessPartnerts);
  } catch (error) {
    next(error);
  }
});

businessPartnersRouter.get("/:BusinessPartnerID", async (req, res, next) => {
  try {
    const { BusinessPartnerID } = req.params;
    const businessPartner = await getBusinessPartnerById(BusinessPartnerID);
    res.status(200).json(businessPartner);
  } catch (error) {
    next(error);
  }
});

module.exports = businessPartnersRouter;
