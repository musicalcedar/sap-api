import express from "express";
import loginRouter from "./login.router.js";
import businessPartnersRouter from "./businessPartnerts.js";

const apiRouter = (server) => {
  const router = express.Router();

  server.use("/api/v1", router);
  router.use("/login", loginRouter);
  router.use("/business-partners", businessPartnersRouter);
};

export default apiRouter;
