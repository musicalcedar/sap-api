const axiosInstance = require("../../../config/axiosInstance");
const { useSessionCookies } = require("../../utils/sessionCookies");

const getEmployees = async () => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      "/EmployeesInfo?$select=EmployeeRolesInfoLines,FirstName,LastName"
    );

    return res.data.value;
  } catch (err) {
    throw err;
  }
};

const getTechnicians = async () => {
  try {
    useSessionCookies(axiosInstance);
    const res = await axiosInstance.get(
      "/EmployeesInfo?$select=EmployeeRolesInfoLines,FirstName,LastName"
    );

    const { value } = res.data;
    const technicians = value.filter((technician) => {
      const { EmployeeRolesInfoLines } = technician;

      return EmployeeRolesInfoLines.length > 0;
    });

    return technicians;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getTechnicians,
  getEmployees,
};
