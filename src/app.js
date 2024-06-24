const express = require("express");
const apiRouter = require("./router/index.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const options = require("../config/corsConfig.js");
const {
  errorLog,
  ormErrorHandler,
  boomErrorHandler,
  tokenErrorHandler,
  errorHandler,
} = require("./middlewares/errorHandler");

const createServer = () => {
  const server = express();
  server.use(cors(options));
  server.use(express.json());
  server.use(cookieParser());

  apiRouter(server);
  server.use(errorLog);
  server.use(ormErrorHandler);
  server.use(boomErrorHandler);
  server.use(errorHandler);
  server.use(tokenErrorHandler);
  return server;
};

module.exports = createServer;
