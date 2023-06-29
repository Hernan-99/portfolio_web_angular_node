import { Router } from "express";
import {
  getProyectos,
  getProyecto,
  postProyecto,
  patchProyecto,
  deleteProyecto,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProyectos);
router.get("/projects/:id", getProyecto);
router.post("/projects", postProyecto);
router.patch("/projects/:id", patchProyecto);
router.delete("/projects/:id", deleteProyecto);

export default router;
