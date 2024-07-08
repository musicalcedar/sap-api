const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getAllItems = async ({ limit, skip }) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      `/Items?$orderby=ItemCode&$top=${limit}&$skip=${skip}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getFilteredItems = async ({ limit, skip }) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      `/Items?$select=ItemName,ItemCode&$orderby=ItemCode&$top=${limit}&$skip=${skip}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getItemById = async (ItemCode) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      `/Items('${ItemCode}')?$select=ItemName,ItemCode&$orderby=ItemCode`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getItemByName = async ({ ItemName, limit, skip }) => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      `/Items?$filter=contains(ItemName, '${ItemName}')&$select=ItemCode,ItemName&$orderby=ItemCode&$top=${limit}&$skip=${skip}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllItems, getFilteredItems, getItemById, getItemByName };
