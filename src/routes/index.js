import { Router } from "express";

// Routers
import candidateRouter from "./candidate.route.js";

export const router = Router();

router.use("/candidates", candidateRouter);
