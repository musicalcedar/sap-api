const express = require("express");
const loginRouter = require("./loginRouter");
const businessPartnersRouter = require("./businessPartnertRouter");

const apiRouter = (server) => {
  const router = express.Router();

  server.use("/api/v1", router);
  router.use("/login", loginRouter);
  router.use("/business-partners", businessPartnersRouter);
};

module.exports = apiRouter;
