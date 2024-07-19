const Joi = require("joi");

const username = Joi.string().email();
const password = Joi.string()
  .min(8)
  .max(16)
  .pattern(new RegExp("^[a-zA-Z0-9*#$%]{8,16}$"));

const authSchema = Joi.object({
  username: username.required(),
  password: password.required(),
});

module.exports = authSchema;
