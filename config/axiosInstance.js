const axios = require("axios");
const https = require("https");
const config = require("./config");

const { URL } = config.SAP_B1;

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
});

module.exports = axiosInstance;
