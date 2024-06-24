const express = require("express");
const loginToSap = require("../service/loginToSapService.js");
const { setSessionCookies } = require("../utils/sessionCookies.js");

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      return res
        .status(400)
        .json({ error: "Usuario y contraseña son requeridos" });
    }
    if (user === "admin" && password === "123456") {
      const sessionCookies = await loginToSap();
      setSessionCookies(sessionCookies);
    } else {
      throw new Error("Usuario o contraseña incorrectos");
    }

    /* if (sessionCookies) {
      sessionCookies.forEach((cookie) => {
        res.cookie(
          cookie.split(";")[0].split("=")[0],
          cookie.split(";")[0].split("=")[1],
          {
            httpOnly: true,
            secure: true,
            sameSite: "None",
          }
        );
      });
    } */
    res.status(200).json({ message: "Sesión iniciada correctamente" });
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
});

module.exports = loginRouter;
