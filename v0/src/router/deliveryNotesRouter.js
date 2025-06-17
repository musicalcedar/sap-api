const express = require("express");
const {
  getAllDeliveryNotes,
  getDeliveryNoteByUser,
} = require("../service/SAP/deliveryNotesService");

const deliveryNotesRouter = express.Router();

deliveryNotesRouter.get("/", async (req, res, next) => {
  try {
    const deliveryNotes = await getAllDeliveryNotes();
    res.status(200).json(deliveryNotes);
  } catch (err) {
    next(err);
  }
});

deliveryNotesRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const deliveryNotes = await getDeliveryNoteByUser(userId);
    res.status(200).json(deliveryNotes);
  } catch (err) {
    next(err);
  }
});

module.exports = deliveryNotesRouter;
