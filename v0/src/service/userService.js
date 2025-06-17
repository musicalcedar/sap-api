const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const User = require("../db/models/userModel");

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  if (!user) {
    throw boom.notFound("User not found");
  }
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  if (!user) {
    throw boom.notFound("User not found");
  }
  return user;
};

const createUser = async (userData) => {
  const newUser = {
    ...userData,
    password: await bcrypt.hash(userData.password, 10),
  };
  const user = await User.create(newUser);
  delete user.dataValues.password;
  return user;
};

const updateUser = async (id, userData) => {
  const user = await getUserById(id);
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  const updatedUser = await user.update(userData);
  delete updatedUser.dataValues.password;
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  await user.destroy();
  return { message: "User deleted" };
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
};
