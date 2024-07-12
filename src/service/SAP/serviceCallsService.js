const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getServiceCalls = async () => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get("/ServiceCalls");
    return res.data.value;
  } catch (err) {
    throw err;
  }
};

const getServiceCallById = async (id) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(`/ServiceCalls(${id})`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const createServiceCall = async (serviceCallData) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.post("/ServiceCalls", serviceCallData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const updateServiceCall = async (id, serviceCallData) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.patch(
      `/ServiceCalls(${id})`,
      serviceCallData
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getServiceCalls,
  getServiceCallById,
  createServiceCall,
  updateServiceCall,
};
