/*
ESTE ES EL ARCHIVO RAIZ, ACA VOY A LLAMAR A app.js
*/
import { PORT } from "./settings.js"; //importamos el puerto de escucha
import app from "./app.js"; //importamos app.js (archivo con las rutas)

//en app almacene express, es por eso que puedo hacer un .listen(), ya que este es un metodo de express
app.listen(PORT);
console.log(`App corriendo en el puerto ${PORT}`);
