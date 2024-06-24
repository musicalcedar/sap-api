const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { getUserByEmail } = require("../../../service/userService");

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return done(boom.unauthorized(), false);
      }
      if (!(await bcrypt.compare(password, user.password))) {
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
