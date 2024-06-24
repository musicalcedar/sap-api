const express = require("express");
const apiRouter = require("./router/index.js");
const cookieParser = require("cookie-parser");

const createServer = () => {
  const server = express();

  server.use(express.json());
  server.use(cookieParser());

  apiRouter(server);
  return server;
};

module.exports = createServer;
