require("dotenv").config();

const {
  PORT,
  NODE_ENV,
  SAP_URL,
  SAP_COMPANY_DB,
  SAP_USERNAME,
  SAP_PASSWORD,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  ACCEPTED_ORIGINS,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
} = process.env;

const config = {
  PORT: PORT,
  NODE_ENV: NODE_ENV || "development",
  DB_POSTGRES: {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    NAME: DB_NAME,
    PORT: DB_PORT,
    URL: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  },
  SAP_B1: {
    URL: SAP_URL,
    DATABASE: SAP_COMPANY_DB,
    USER: SAP_USERNAME,
    PASSWORD: SAP_PASSWORD,
  },
  CORS: {
    ACCEPTED_ORIGINS: ACCEPTED_ORIGINS.split(","),
  },
  JWT: {
    SECRET: JWT_SECRET,
    REFRESH_SECRET: JWT_REFRESH_SECRET,
  },
};

module.exports = config;
