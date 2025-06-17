const Joi = require("joi");
const id = Joi.string().uuid();
const username = Joi.string().min(3).max(30);
const password = Joi.string()
  .min(8)
  .max(16)
  .pattern(new RegExp("^[a-zA-Z0-9*#$%]{8,16}$"));
const email = Joi.string().email();
const role = Joi.string().valid("admin", "user");

const createUserSchema = Joi.object({
  username: username.required(),
  password: password.required(),
  email: email.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  username,
  password,
  email,
  role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
