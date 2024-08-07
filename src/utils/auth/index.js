const passport = require("passport");

const LocalStrategy = require("./strategies/localStrategy.js");
const JWTStrategy = require("./strategies/jwtStrategy.js");

passport.use(LocalStrategy);
passport.use(JWTStrategy);
