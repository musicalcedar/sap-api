const express = require("express");
const passport = require("passport");
const loginToSap = require("../service/SAP/loginToSapService.js");
const { setSessionCookies } = require("../utils/sessionCookies.js");
const validationHandler = require("../middlewares/validationHandler.js");
const authSchema = require("../schemas/authSchema.js");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("../utils/tokenHandler.js");
const { addToken, getToken } = require("../service/tokenService.js");

const loginRouter = express.Router();

loginRouter.post(
  "/login",
  validationHandler(authSchema, "body"),
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const userData = req.user;
      const userPayload = {
        sub: userData.id,
        role: userData.role,
        username: userData.username,
      };

      const accessToken = await generateAccessToken(userPayload);
      const refreshToken = await generateRefreshToken(userPayload);

      await addToken(refreshToken, userData.id);

      const user = {
        username: userData.username,
        role: userData.role,
      };

      res.cookie("token", accessToken, {
        httpOnly: true,
        sameSite: "lax",
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
      });
      const sessionCookies = await loginToSap();
      if (!sessionCookies) {
        throw new Error("Error logging in to SAP");
      }
      setSessionCookies(sessionCookies);

      res.status(200).json({ message: "login ok" });
    } catch (error) {
      next(error);
    }
  }
);

loginRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "logut ok" });
});

loginRouter.get("/refresh-token", async (req, res, next) => {
  const { redirect } = req.query;
  const refreshToken = req.cookies.refreshToken;
  console.log({ refreshToken });
  try {
    if (!refreshToken) {
      throw new Error("No token provided");
    }
    const tokenFound = await getToken(refreshToken);
    if (!tokenFound) {
      throw new Error("Invalid token");
    }

    const tokenVerify = await verifyToken(tokenFound.token, false);

    const userPayload = {
      sub: tokenVerify.sub,
      role: tokenVerify.role,
      email: tokenVerify.email,
    };

    const accessToken = await generateAccessToken(userPayload);

    res.cookie("token", accessToken, {
      httpOnly: true,
    });

    if (redirect) {
      return res.redirect(decodeURIComponent(redirect));
    }

    res.status(200).json({ message: "Token refreshed" });
  } catch (err) {
    next(err);
  }
});

module.exports = loginRouter;
