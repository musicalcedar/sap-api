const express = require("express");

const serviceCallRouter = express.Router();

serviceCallRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "GET Service Calls" });
  } catch (error) {
    next(error);
  }
});

module.exports = serviceCallRouter;
