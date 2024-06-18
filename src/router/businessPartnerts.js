import express from "express";
import axios from "axios";
import https from "https";
import { getSessionCookies } from "../utils/sessionCookies.js";
const businessPartnersRouter = express.Router();

const agent = new https.Agent({
  rejectUnauthorized: false,
});

businessPartnersRouter.get("/", async (req, res) => {
  try {
    const sessionCookies = getSessionCookies();
    const response = await axios.get(
      "https://45.163.29.146:50000/b1s/v1/BusinessPartners",
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: sessionCookies.join("; "),
        },
        httpsAgent: agent,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).json({ error: "Error en la solicitud POST" });
  }
});

export default businessPartnersRouter;
