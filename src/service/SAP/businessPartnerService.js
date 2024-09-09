const axiosInstance = require("../../../config/axiosInstance.js");
const { useSessionCookies } = require("../../utils/sessionCookies.js");

const getBusinessPartners = async () => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get("/BusinessPartners");
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getBusinessPartnerById = async (id) => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get(`/BusinessPartners('${id}')`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getBusinessPartners, getBusinessPartnerById };
