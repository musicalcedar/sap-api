const express = require("express");
const getBusinessPartners = require("../service/businessPartnerService");

const businessPartnersRouter = express.Router();

businessPartnersRouter.get("/", async (req, res) => {
  try {
    const businessPartnerts = await getBusinessPartners();
    res.status(200).json(businessPartnerts);
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
});

module.exports = businessPartnersRouter;
