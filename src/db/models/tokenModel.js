const { DataTypes } = require("sequelize");
const db = require("../index.js");
const User = require("./userModel.js");

const Token = db.define("Token", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Token, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Token.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

module.exports = Token;
