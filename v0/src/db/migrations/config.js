const config = require("../../../config/config.js");

const { URL } = config.DB_POSTGRES;

const development = {
  url: URL,
  dialect: "postgres",
  /* dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }, 
  }, */
};

module.exports = {
  development,
};
