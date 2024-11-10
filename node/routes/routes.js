import express from "express";
// import { createExpediente, getExpediente, updateExpediente } from "../controllers/ExpedienteController.js";
import { handleRequest } from "../controllers/ExpedienteController.js";
const router = express.Router();

// router.post("/", createExpediente);
// router.get("/:exp_num", getExpediente);
// router.put("/:exp_num", updateExpediente);

router.route("/:model/:id?")
    .get(handleRequest)
    .post(handleRequest)
    .put(handleRequest);


export default router;

// import express from 'express'
// import { createExpediente } from '../controllers/ExpedienteController'
