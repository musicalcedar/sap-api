const { Sequelize } = require("sequelize");
const config = require("../../config/config.js");

const DB_URL = config.DB_POSTGRES.URL;

const db = new Sequelize(DB_URL, {
  logging: false,
  native: false,
  dialect: "postgres",
  /*  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }, */
});

module.exports = db;
