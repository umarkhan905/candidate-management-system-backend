import { Router } from "express";
import {
  addCandidate,
  getCandidate,
  getCandidates,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidate.controller.js";
import { upload } from "../config/multer.config.js";

const router = Router();

router
  .route("/")
  .post(upload.single("resume"), addCandidate)
  .get(getCandidates);

router
  .route("/:id")
  .get(getCandidate)
  .patch(upload.single("resume"), updateCandidate)
  .delete(deleteCandidate);

export default router;
