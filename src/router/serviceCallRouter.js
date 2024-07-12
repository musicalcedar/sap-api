const express = require("express");
const serviceCallRouter = express.Router();
const validationHandler = require("../middlewares/validationHandler");
const {
  getServiceCalls,
  getServiceCallById,
  createServiceCall,
  updateServiceCall,
} = require("../service/SAP/serviceCallsService");
const {
  createServiceCallSchema,
  getServiceCallSchema,
  updateServiceCallSchema,
} = require("../schemas/serviceCallSchema");

serviceCallRouter.get("/", async (req, res, next) => {
  try {
    const serviceCalls = await getServiceCalls();
    res.status(200).json(serviceCalls);
  } catch (error) {
    next(error);
  }
});

serviceCallRouter.get(
  "/:ServiceCallID",
  validationHandler(getServiceCallSchema, "params"),
  async (req, res, next) => {
    try {
      const { ServiceCallID } = req.params;
      const serviceCall = await getServiceCallById(ServiceCallID);
      res.status(200).json(serviceCall);
    } catch (err) {
      next(err);
    }
  }
);

serviceCallRouter.post(
  "/",
  validationHandler(createServiceCallSchema, "body"),
  async (req, res, next) => {
    try {
      const serviceCallData = req.body;
      const newServiceCall = await createServiceCall(serviceCallData);
      res.status(201).json(newServiceCall);
    } catch (err) {
      next(err);
    }
  }
);

serviceCallRouter.patch(
  "/:ServiceCallID",
  validationHandler(getServiceCallSchema, "params"),
  validationHandler(updateServiceCallSchema, "body"),
  async (req, res, next) => {
    try {
      const { ServiceCallID } = req.params;
      const serviceCallData = req.body;
      const updatedServiceCall = await updateServiceCall(
        ServiceCallID,
        serviceCallData
      );
      res.status(200).json(updatedServiceCall);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = serviceCallRouter;
