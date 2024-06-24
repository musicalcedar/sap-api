const config = require("./config");

const { ACCEPTED_ORIGINS } = config.CORS;

const options = {
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = options;
