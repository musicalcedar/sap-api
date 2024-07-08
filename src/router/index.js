const express = require("express");
const authRouter = require("./authRouter");
const businessPartnersRouter = require("./businessPartnertRouter");
const userRouter = require("./userRouter");
const customerCardRouter = require("./customerCardRouter");
const serviceCallRouter = require("./serviceCallRouter");
const authHandler = require("../middlewares/authHandler");
const itemsRouter = require("./itemsRouter");

const apiRouter = (server) => {
  const router = express.Router();

  server.use("/api/v1", router);
  router.use("/auth", authRouter);
  router.use("/user", userRouter);
  router.use(authHandler);
  router.use("/business-partners", businessPartnersRouter);
  router.use("/items", itemsRouter);
  router.use("/customer-cards", customerCardRouter);
  router.use("/service-call", serviceCallRouter);
};

module.exports = apiRouter;
