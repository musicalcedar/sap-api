import axios from "axios";
import https from "https";
import config from "../config/config.js";
import { getSessionCookies } from "../src/utils/sessionCookies.js";

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

export default axiosInstance;
