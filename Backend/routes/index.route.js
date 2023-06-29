import { Router } from "express"; // importo el modulo router de express

//importo el controller
import {
  getAllPerfil,
  getPerfilById,
  postDatosPerfil,
  patchDatosPerfil,
  deleteDatosPerfil,
} from "../controllers/index.controller.js";

const router = Router();

// router.get("/login", login)
// router.get("/dashboard", dashboard)
router.get("/", getAllPerfil);
router.get("/perfil/:id", getPerfilById);
router.post("/profile", postDatosPerfil);
router.patch("/edit/profile/:id", patchDatosPerfil);
router.delete("/del/profile/:id", deleteDatosPerfil);
export default router; //aca exporto la variable route, para despues llamarla en app.js
