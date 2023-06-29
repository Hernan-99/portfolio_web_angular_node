import { pool } from "../db.js"; //importo el conector de mysql que esta en db.js

//FUNCION PARA TRAER TODOS LOS PERFILES
export const getAllPerfil = async (req, res) => {
  try {
    /*.query quiere decir que vamos a hacer una consulta. en este caso esa consulta es
    selecciona (SELECT) todo (*) de (FROM) la tabla perfil.
    y con res.send(rows) estamos mostran o enviando esos datos. 
    */
    const [rows] = await pool.query("SELECT * FROM perfil");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Oops!, algo salio mal" });
    console.log(error);
  }
};

//FUNCION PARA TRAER UN SOLO PERFIL
export const getPerfilById = async (req, res) => {
  try {
    console.log("antes");
    /*.query quiere decir que vamos a hacer una consulta. en este caso esa consulta es
    selecciona (SELECT) todo (*) de (FROM) la tabla perfil con (WHERE) id.
    y con res.send(rows) estamos mostran o enviando esos datos. 
    */
    const [rows] = await pool.query(
      "SELECT * FROM perfil WHERE id_perfil = ?",
      [req.params.id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "perfil not found",
      });
    } else {
      res.json(rows[0]); // esta linea me muestra
    }
    // console.log("despues");
  } catch (error) {
    res.status(500).json({ message: "Oops!, algo salio mal" });
    // console.log(error);
  }
};
