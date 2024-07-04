const { Strategy, ExtractJwt } = require("passport-jwt");
const config = require("../../../../config/config");

const { SECRET } = config.JWT;

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  return token;
};
const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: SECRET,
};
const JWTStrategy = new Strategy(options, async (payload, done) => {
  try {
    return done(null, payload);
  } catch (error) {
    done(error, false);
  }
});

module.exports = JWTStrategy;
