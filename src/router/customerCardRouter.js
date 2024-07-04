const express = require("express");

const customerCardRouter = express.Router();

customerCardRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "GET Customer Cards" });
  } catch (error) {
    next(error);
  }
});

module.exports = customerCardRouter;
