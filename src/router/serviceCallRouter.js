const express = require("express");
const {
  getServiceCalls,
  getServiceCallById,
  createServiceCall,
  updateServiceCall,
} = require("../service/SAP/serviceCallsService");
const { createServiceCallSchema } = require("../schemas/serviceCallSchema");
const validationHandler = require("../middlewares/validationHandler");

const serviceCallRouter = express.Router();

serviceCallRouter.get("/", async (req, res, next) => {
  try {
    const serviceCalls = await getServiceCalls();
    res.status(200).json(serviceCalls);
  } catch (error) {
    next(error);
  }
});

serviceCallRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const serviceCall = await getServiceCallById(id);
    res.status(200).json(serviceCall);
  } catch (err) {
    next(err);
  }
});

serviceCallRouter.post(
  "/",
  validationHandler(createServiceCallSchema, "body"),
  async (req, res, next) => {
    try {
      const serviceCallData = req.body;
      const newServiceCall = createServiceCall(serviceCallData);
      res.status(201).json(newServiceCall);
    } catch (err) {
      next(err);
    }
  }
);

serviceCallRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const serviceCallData = req.body;
    const updatedServiceCall = updateServiceCall(id, serviceCallData);
    res.status(200).json(updatedServiceCall);
  } catch (err) {
    next(err);
  }
});

module.exports = serviceCallRouter;
