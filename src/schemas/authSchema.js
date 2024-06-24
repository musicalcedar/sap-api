const Joi = require("joi");

const email = Joi.string().email();
const password = Joi.string()
  .min(8)
  .max(16)
  .pattern(new RegExp("^[a-zA-Z0-9*#$%]{8,16}$"));

const authSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

module.exports = authSchema;
