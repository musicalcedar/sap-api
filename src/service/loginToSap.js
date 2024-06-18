import axios from "axios";
import https from "https";
import config from "../../config/config.js";

const { URL, DATABASE, USER, PASSWORD } = config.SAP_B1;

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const body = {
  CompanyDB: DATABASE,
  UserName: USER.replace(/\\\\/g, "\\"),
  Password: PASSWORD,
};

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
};

const loginToSap = async () => {
  try {
    const res = await axios.post(`${URL}/Login`, body, axiosConfig);

    const sessionCookies = res.headers["set-cookie"];

    return sessionCookies;
  } catch (err) {
    throw new Error(`SAP Login failed: ${err.message}`);
  }
};

export default loginToSap;
