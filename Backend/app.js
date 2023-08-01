/*
ESTE ARCHIVO ES EN DONDE LLAMO A TODOS LOS ENDPOINTS
*/
import express from "express"; //importo expres
import cors from "cors";

//importamos los modulos donde estan las rutas
import indexRoutes from "./routes/index.route.js";
import skillsRoute from "./routes/skills.route.js";
import proyectoRoute from "./routes/projects.route.js";

const app = express(); //inicio express y lo almaceno en app
app.use(
  cors({
    origin: "https://hernan-sanchez-portfolio.netlify.app/",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

//permite que la aplicación entienda información JSON y la procese de manera adecuada.
app.use(express.json());

app.use("/", indexRoutes); //digo, usa lo que haya en indexRoutes pero antes pone un /
app.use("/api", proyectoRoute); //usa proyectoRoutes
app.use("/api", skillsRoute);
// app.use("/api", educacionRoute);
// app.use("/api", cursosRoute);

app.use((req, res, next) => {
  //para mandar error si no se encuentra la ruta
  res.status(404).json({ message: "URL Not Found" });
});

export default app; //aca exportamos app para despues importarlo en index.js
