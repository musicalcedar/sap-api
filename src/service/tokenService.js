const Token = require("../db/models/tokenModel");

const addToken = async (token, userId) => {
  const newToken = await Token.create({ token, userId });
  return newToken;
};

const getTokenByUserId = async (userId) => {
  const tokenToFind = await Token.findOne({
    where: {
      userId,
    },
    order: [["createdAt", "DESC"]],
  });

  return tokenToFind;
};

const getToken = async (token) => {
  const tokenToFind = await Token.findOne({
    where: { token },
  });

  return tokenToFind;
};

const deleteToken = async (userId) => {
  const tokenToFind = await getTokenByUserId(userId);
  await tokenToFind.destroy();
  return { message: "Token deleted" };
};

module.exports = {
  addToken,
  getToken,
};
