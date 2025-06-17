const express = require("express");
const {
  getAllInvoices,
  getInvoiceByUser,
} = require("../service/SAP/invoiceService");

const invoiceRouter = express.Router();

invoiceRouter.get("/", async (req, res, next) => {
  try {
    const invoices = await getAllInvoices();
    res.status(200).json(invoices);
  } catch (err) {
    next(err);
  }
});

invoiceRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const invoices = await getInvoiceByUser(userId);
    res.status(200).json(invoices);
  } catch (err) {
    next(err);
  }
});

module.exports = invoiceRouter;
