const express = require("express");
const authHandler = require("../middlewares/authHandler");
const authRouter = require("./authRouter");
const businessPartnersRouter = require("./businessPartnertRouter");
const userRouter = require("./userRouter");
const customerCardRouter = require("./customerCardRouter");
const serviceCallRouter = require("./serviceCallRouter");
const itemsRouter = require("./itemsRouter");
const invoiceRouter = require("./invoiceRouter");
const deliveryNotesRouter = require("./deliveryNotesRouter");
const employeeRouter = require("./employeeRouter");

const apiRouter = (server) => {
  const router = express.Router();

  server.use("/api/v1", router);
  router.use("/auth", authRouter);
  router.use("/user", userRouter);

  router.use(authHandler);
  router.use("/items", itemsRouter);
  router.use("/business-partners", businessPartnersRouter);
  router.use("/customer-cards", customerCardRouter);
  router.use("/invoice", invoiceRouter);
  router.use("/delivery-notes", deliveryNotesRouter);
  router.use("/employees", employeeRouter);
  router.use("/service-call", serviceCallRouter);
};

module.exports = apiRouter;
