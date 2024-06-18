import dotenv from "dotenv";
dotenv.config();

const { PORT, NODE_ENV, SAP_URL, SAP_COMPANY_DB, SAP_USERNAME, SAP_PASSWORD } =
  process.env;

export default {
  PORT: PORT,
  NODE_ENV: NODE_ENV,
  SAP_B1: {
    URL: SAP_URL,
    DATABASE: SAP_COMPANY_DB,
    USER: SAP_USERNAME,
    PASSWORD: SAP_PASSWORD,
  },
};
