const { ValidationError } = require("sequelize");
const { message } = require("../schemas/authSchema");
const { TokenExpiredError } = require("jsonwebtoken");

const errorLog = (err, req, res, next) => {
  console.error({ msg: err.message, stack: err.stack });
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
};

const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  } else {
    next(err);
  }
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

const tokenErrorHandler = (err, req, res, next) => {
  if (err instanceof TokenExpiredError) {
    res.status(401).json({
      message: err.message,
    });
  } else {
    next(err);
  }
};

const sapErrorHandler = (err, req, res, next) => {
  if (err.response) {
    const { message } = err.response.data.error;
    res.status(400).json(message.value);
  } else {
    next(err);
  }
};

module.exports = {
  errorLog,
  errorHandler,
  ormErrorHandler,
  tokenErrorHandler,
  boomErrorHandler,
  sapErrorHandler,
};
