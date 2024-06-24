const express = require("express");
const userRouter = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../service/userService");
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require("../schemas/userSchema");
const validationHandler = require("../middlewares/validationHandler");

userRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
});

userRouter.get(
  "/:id",
  validationHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await getUserById(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.post(
  "/",
  validationHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.put(
  "/:id",
  validationHandler(getUserSchema, "params"),
  validationHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await updateUser(id, userData);
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.delete(
  "/:id",
  validationHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const message = await deleteUser(id);
      res.status(200).json(message);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = userRouter;
