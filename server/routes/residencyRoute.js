import express from "express";
import {
  createResidency,
  getResidency,
  getAllResidencies,
} from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/create", jwtCheck, createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);
export { router as residencyRoute };
