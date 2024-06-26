const axiosInstance = require("../../config/axiosInstance.js");
const { getSessionCookies } = require("../utils/sessionCookies.js");

const getBusinessPartners = async () => {
  try {
    const sessionCookies = getSessionCookies();
    axiosInstance.defaults.headers.Cookie = sessionCookies.join(";");
    const response = await axiosInstance.get("/BusinessPartners");
    return response.data;
  } catch (error) {
    throw new Error(`Error en la solicitud GET: ${error.message}`);
  }
};

module.exports = getBusinessPartners;
