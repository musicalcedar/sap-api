const express = require("express");
const {
  getAllCustomerCard,
  createCustomerCard,
  getCustomerCardById,
  updateCustomerCard,
  deleteCustomerCard,
  getCustomerCardByCustomerId,
} = require("../service/SAP/customerCardService");
const validationHandler = require("../middlewares/validationHandler");
const {
  createCustomerCardSchema,
  getCustomerCardSchema,
  updateCustomerCardSchema,
} = require("../schemas/customerCardSchema");

const customerCardRouter = express.Router();

customerCardRouter.get("/", async (req, res, next) => {
  try {
    const customerCards = await getAllCustomerCard();
    res.status(200).json(customerCards);
  } catch (error) {
    next(error);
  }
});

customerCardRouter.get(
  "/:EquipmentCardNum",
  validationHandler(getCustomerCardSchema, "params"),
  async (req, res, next) => {
    try {
      const { EquipmentCardNum } = req.params;
      if (!isNaN(Number(EquipmentCardNum.charAt(0)))) {
        const customerCard = await getCustomerCardById(EquipmentCardNum);
        res.status(200).json(customerCard);
      } else {
        console.log("CustomerCardNum: --> ", EquipmentCardNum);
        const customerCard = await getCustomerCardByCustomerId(
          EquipmentCardNum
        );
        res.status(200).json(customerCard);
      }
    } catch (error) {
      next(error);
    }
  }
);

customerCardRouter.post(
  "/",
  validationHandler(createCustomerCardSchema, "body"),
  async (req, res, next) => {
    try {
      const customerCardData = req.body;
      const newCustomerCard = await createCustomerCard(customerCardData);
      res.status(201).json(newCustomerCard);
    } catch (error) {
      next(error);
    }
  }
);

customerCardRouter.patch(
  "/:EquipmentCardNum",
  validationHandler(getCustomerCardSchema, "params"),
  //validationHandler(updateCustomerCardSchema, "body"),
  async (req, res, next) => {
    try {
      const { EquipmentCardNum } = req.params;
      const customerCardData = req.body;

      const updatedCustomerCard = await updateCustomerCard(
        EquipmentCardNum,
        customerCardData
      );
      res.status(200).json(updatedCustomerCard);
    } catch (error) {
      next(error);
    }
  }
);

customerCardRouter.delete(
  "/:EquipmentCardNum",
  validationHandler(getCustomerCardSchema, "params"),
  async (req, res, next) => {
    try {
      const { EquipmentCardNum } = req.params;
      await deleteCustomerCard(EquipmentCardNum);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = customerCardRouter;
