const express = require("express");
const loginRouter = require("./loginRouter");
const businessPartnersRouter = require("./businessPartnertRouter");
const userRouter = require("./userRouter");

const apiRouter = (server) => {
  const router = express.Router();

  server.use("/api/v1", router);
  router.use("/user", userRouter);
  router.use("/login", loginRouter);
  router.use("/business-partners", businessPartnersRouter);
};

module.exports = apiRouter;
