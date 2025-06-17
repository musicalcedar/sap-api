const express = require("express");
const { getTechnicians } = require("../service/SAP/employeeService");

const employeeRouter = express.Router();

employeeRouter.get("/technicians", async (req, res, next) => {
  try {
    const technicians = await getTechnicians();
    res.status(200).json(technicians);
  } catch (error) {
    next(error);
  }
});

module.exports = employeeRouter;
