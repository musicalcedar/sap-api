import express from "express";
import loginToSap from "../service/loginToSap.js";
import { setSessionCookies } from "../utils/sessionCookies.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    const sessionCookies = await loginToSap();

    setSessionCookies(sessionCookies);

    if (sessionCookies) {
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
    }
    res.status(200).json({ message: "Sesión iniciada correctamente" });
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
});

export default loginRouter;
