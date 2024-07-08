const Joi = require("joi");

const ItemName = Joi.string();
const ItemCode = Joi.string();

const itemByNameSchema = Joi.object({
  ItemName: ItemName.required(),
});

const itemByCodeSchema = Joi.object({
  ItemCode: ItemCode.required(),
});

module.exports = { itemByNameSchema, itemByCodeSchema };
