import express from "express";
import apiRouter from "./router/index.js";
import cookieParser from "cookie-parser";

const createServer = () => {
  const server = express();

  server.use(express.json());
  server.use(cookieParser());

  apiRouter(server);
  return server;
};

export default createServer;
