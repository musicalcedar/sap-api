const express = require("express");
const {
  getAllItems,
  getFilteredItems,
  getItemById,
  getItemByName,
} = require("../service/SAP/itemsService");
const validationHandler = require("../middlewares/validationHandler");
const { itemByCodeSchema, itemByNameSchema } = require("../schemas/itemSchema");

const itemsRouter = express.Router();

itemsRouter.get("/", async (req, res, next) => {
  try {
    const { filter, page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    if (filter) {
      const items = await getFilteredItems({ limit, skip });
      res.status(200).json(items);
      return;
    }
    const items = await getAllItems({ limit, skip });
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

itemsRouter.get("/:ItemCode", async (req, res, next) => {
  try {
    const { ItemCode } = req.params;
    const item = await getItemById(ItemCode);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
});

itemsRouter.get("/name/:ItemName", async (req, res, next) => {
  try {
    const { ItemName } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const item = await getItemByName({ ItemName, limit, skip });
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
});
module.exports = itemsRouter;
