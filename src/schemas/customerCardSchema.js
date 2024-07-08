const Joi = require("joi");

const CustomerCode = Joi.string();
const ItemCode = Joi.string();
const InternalSerialNum = Joi.string();
const ManufacturerSerialNum = Joi.string();
const InvoiceCode = Joi.number();
const InvoiceNumber = Joi.number();
const DeliveryCode = Joi.number();
const DeliveryNumber = Joi.number();
const EquipmentCardNum = Joi.string();
const InstallLocation = Joi.string();

const createCustomerCardSchema = Joi.object({
  CustomerCode: CustomerCode.required(),
  ItemCode: ItemCode.required(),
  InternalSerialNum: InternalSerialNum.required(),
  ManufacturerSerialNum: ManufacturerSerialNum.required(),
  InvoiceCode,
  InvoiceNumber,
  DeliveryCode,
  DeliveryNumber,
});

const updateCustomerCardSchema = Joi.object({
  InvoiceCode,
  InvoiceNumber,
  DeliveryCode,
  DeliveryNumber,
  InstallLocation,
});

const getCustomerCardSchema = Joi.object({
  EquipmentCardNum: EquipmentCardNum.required(),
});

module.exports = {
  createCustomerCardSchema,
  updateCustomerCardSchema,
  getCustomerCardSchema,
};
