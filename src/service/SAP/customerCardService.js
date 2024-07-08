const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getAllCustomerCard = async () => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get("/CustomerEquipmentCards");
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getCustomerCardById = async (id) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(`/CustomerEquipmentCards(${id})`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const createCustomerCard = async (customerCardData) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.post(
      "/CustomerEquipmentCards",
      customerCardData
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const updateCustomerCard = async (id, customerCardData) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.put(
      `/CustomerEquipmentCards(${id})`,
      customerCardData
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const deleteCustomerCard = async (id) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.delete(`/CustomerEquipmentCards(${id})`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllCustomerCard,
  createCustomerCard,
  updateCustomerCard,
  getCustomerCardById,
  deleteCustomerCard,
};
