const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getAllInvoices = async () => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get("/Invoices");
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getInvoiceByUser = async (userId) => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get(
      `Invoices?$select=DocEntry,DocNum,DocType,CardCode,CardName&$filter=CardCode eq '${userId}'`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllInvoices, getInvoiceByUser };
