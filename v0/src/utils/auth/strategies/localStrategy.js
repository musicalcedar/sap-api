const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { getUserByEmail } = require("../../../service/userService");

const LocalStrategy = new Strategy(
  {
    usernameField: "username",
  },
  async (username, password, done) => {
    try {
      const user = await getUserByEmail(username);
      if (!user) {
        return done(boom.unauthorized(), false);
      }
      const isValid = await bcrypt.compare(password, user.dataValues.password);
      if (!isValid) {
        return done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
);

module.exports = LocalStrategy;
