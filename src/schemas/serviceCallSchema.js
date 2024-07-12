const Joi = require("joi");
const ServiceCallID = Joi.string();
const CustomerCode = Joi.string();
const Subject = Joi.string();
const Status = Joi.number();
const Priority = Joi.string();
const ManufacturerSerialNum = Joi.string();
const InternalSerialNum = Joi.string();
const ItemCode = Joi.string();
const ItemDescription = Joi.string();
const Origin = Joi.number();
const ProblemType = Joi.number();
const ProblemSubType = Joi.number();
const CallType = Joi.number();
const TechnicianCode = Joi.number();
const Resolution = Joi.string();

const createServiceCallSchema = Joi.object({
  CustomerCode: CustomerCode.required(),
  Subject: Subject.required(),
  Status: Status.required(),
  Priority: Priority.required(),
  ManufacturerSerialNum: ManufacturerSerialNum.required(),
  InternalSerialNum: InternalSerialNum.required(),
  ItemCode: ItemCode.required(),
  ItemDescription: ItemDescription.required(),
  Origin: Origin.required(),
  ProblemType: ProblemType.required(),
  ProblemSubType: ProblemSubType.required(),
  CallType: CallType.required(),
  TechnicianCode: TechnicianCode.required(),
  Resolution,
});

const updateServiceCallSchema = Joi.object({
  Subject,
  Status,
  Priority,
  ProblemType,
  ProblemSubType,
  CallType,
  TechnicianCode,
  Resolution,
});

const getServiceCallSchema = Joi.object({
  ServiceCallID: ServiceCallID.required(),
});

module.exports = {
  createServiceCallSchema,
  updateServiceCallSchema,
  getServiceCallSchema,
};
