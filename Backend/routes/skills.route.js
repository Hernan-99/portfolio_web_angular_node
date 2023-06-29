import { Router } from "express";

import {
  getSkills,
  getSkill,
  postSkills,
  patchSkill,
  deleteSkill,
} from "../controllers/skills.controller.js";

const router = Router();
router.get("/skills", getSkills);
router.get("/skills/:id", getSkill);
router.post("/skills", postSkills);
router.patch("/skills/:id", patchSkill);
router.delete("/skills/:id", deleteSkill);

export default router;
