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
  sapErrorHandler,
} = require("./middlewares/errorHandler");

const createServer = () => {
  const server = express();
  server.use(cors(options));
  server.use(express.json());
  server.use(cookieParser());
  require("./utils/auth/index.js");
  apiRouter(server);
  server.use(errorLog);
  server.use(ormErrorHandler);
  server.use(boomErrorHandler);
  server.use(tokenErrorHandler);
  server.use(sapErrorHandler);
  server.use(errorHandler);
  return server;
};

module.exports = createServer;
