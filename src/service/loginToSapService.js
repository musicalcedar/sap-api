import config from "../../config/config.js";
import axiosInstance from "../../config/axiosInstance.js";

const { DATABASE, USER, PASSWORD } = config.SAP_B1;

const body = {
  CompanyDB: DATABASE,
  UserName: USER.replace(/\\\\/g, "\\"),
  Password: PASSWORD,
};

const loginToSap = async () => {
  try {
    const res = await axiosInstance.post("/Login", body);

    const sessionCookies = res.headers["set-cookie"];

    return sessionCookies;
  } catch (err) {
    throw new Error(`SAP Login failed: ${err.message}`);
  }
};

export default loginToSap;
