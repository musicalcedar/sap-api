const passport = require("passport");

const authHandler = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user) {
      const originalUrl = req.originalUrl;
      return res.redirect(
        `/api/v1/auth/refresh-token?redirect=${encodeURIComponent(originalUrl)}`
      );
    }
    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = authHandler;
