"use strict";
const User = require("../models/userModel.js");
const Token = require("../models/tokenModel.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(User.getTableName(), User.getAttributes());
    await queryInterface.createTable(
      Token.getTableName(),
      Token.getAttributes()
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(User.getTableName());
    await queryInterface.dropTable(Token.getTableName());
  },
};
