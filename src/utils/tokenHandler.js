const jwt = require("jsonwebtoken");
const config = require("../../config/config.js");

const { SECRET, REFRESH_SECRET } = config.JWT;

const sign = (payload, isAccesToken) => {
  return jwt.sign(payload, isAccesToken ? SECRET : REFRESH_SECRET, {
    expiresIn: isAccesToken ? "30m" : "1h",
  });
};

const generateAccessToken = (payload) => sign(payload, true);
const generateRefreshToken = (payload) => sign(payload, false);

const verifyToken = (token, isAccessToken) => {
  return jwt.verify(token, isAccessToken ? SECRET : REFRESH_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
