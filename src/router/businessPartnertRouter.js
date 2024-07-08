const express = require("express");
const getBusinessPartners = require("../service/SAP/businessPartnerService");

const businessPartnersRouter = express.Router();

businessPartnersRouter.get("/", async (req, res, next) => {
  try {
    const businessPartnerts = await getBusinessPartners();
    res.status(200).json(businessPartnerts);
  } catch (error) {
    next(error);
  }
});

module.exports = businessPartnersRouter;
