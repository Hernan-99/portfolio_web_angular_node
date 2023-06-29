import { Router } from "express"; // importo el modulo router de express

//importo el controller
import {
  getAllPerfil,
  getPerfilById,
} from "../controllers/index.controller.js";

const router = Router();

// router.get("/login", login)
// router.get("/dashboard", dashboard)
router.get("/", getAllPerfil);
router.get("/perfil/:id", getPerfilById);
export default router; //aca exporto la variable route, para despues llamarla en app.js
