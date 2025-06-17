const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getAllDeliveryNotes = async () => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get("/DeliveryNotes");
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getDeliveryNoteByUser = async (userId) => {
  try {
    useSessionCookies(axiosInstance);
    const response = await axiosInstance.get(
      `DeliveryNotes?$select=DocEntry,DocNum,DocType,CardCode,CardName&$filter=CardCode eq '${userId}'`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllDeliveryNotes, getDeliveryNoteByUser };
