const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      return res
        .status(400)
        .json({ error: "Usuario y contraseña son requeridos" });
    }
    if (user === "admin" && password === "123456") {
      res.status(200).json({ message: "Sesión iniciada correctamente" });
    } else {
      throw new Error("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
});
