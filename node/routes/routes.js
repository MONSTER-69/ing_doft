import express from "express";
import { createExpediente, getExpediente, updateExpediente } from "../controllers/ExpedienteController.js";

const router = express.Router();

router.post("/", createExpediente);
router.get("/:exp_num", getExpediente);
router.put("/:exp_num", updateExpediente);

export default router;