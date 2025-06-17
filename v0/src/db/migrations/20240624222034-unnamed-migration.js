"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn("Users", "password", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn("Users", "password", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },
};
