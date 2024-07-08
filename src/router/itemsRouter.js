const express = require("express");
const {
  getAllItems,
  getFilteredItems,
} = require("../service/SAP/itemsService");

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

module.exports = itemsRouter;
