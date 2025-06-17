const config = require("../../../config/config.js");
const axiosInstance = require("../../../config/axiosInstance.js");

const { DATABASE, USER, PASSWORD } = config.SAP_B1;

if (!DATABASE || !USER || !PASSWORD) {
  throw new Error("SAP B1 configuration is missing");
}

const body = {
  CompanyDB: DATABASE,
  UserName: USER.replace(/\\\\/g, "\\"),
  Password: PASSWORD,
};

const loginToSap = async (retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await axiosInstance.post("/Login", body);
      const sessionCookies = res.headers["set-cookie"];
      if (!sessionCookies) {
        throw new Error("No session cookies received from SAP");
      }
      return sessionCookies;
    } catch (err) {
      if (attempt === retries) {
        throw new Error(
          `SAP Login failed after ${retries} attempts: ${err.message}`
        );
      }

      await new Promise((res) => setTimeout(res, 2000));
    }
  }
};

module.exports = loginToSap;
