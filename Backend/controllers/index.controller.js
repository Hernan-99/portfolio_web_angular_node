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

//FUNCION PARA CREAR
export const postDatosPerfil = async (req, res) => {
  const { nombre, apellido, profesion, descripcion, img_perfil, banner } =
    req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO perfil (nombre, apellido, profesion, descripcion, img_perfil, banner, user_id_user) VALUES (?,?,?,?,?,?,1)",
      [nombre, apellido, profesion, descripcion, img_perfil, banner]
    );
    res.send({
      id: rows.insertId,
      nombre,
      apellido,
      profesion,
      descripcion,
      img_perfil,
      banner,
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "Oops!, algo salio mal" });
  }
};

export const patchDatosPerfil = async (req, res) => {
  //req.params tiene el id_perfil. entonces los guardamos en la variable id
  const { id } = req.params;
  const { nombre, apellido, profesion, descripcion, img_perfil, banner } =
    req.body; //req.body, porque en el body tengo el nombre, apellido, etc

  console.log(id);
  console.log(nombre, apellido, profesion, descripcion, img_perfil, banner);
  try {
    console.log("antes");
    const [result] = await pool.query(
      "UPDATE perfil SET nombre = IFNULL (?, nombre), apellido = IFNULL(?, apellido), profesion = IFNULL(?, profesion), descripcion = IFNULL(?, descripcion), img_perfil = IFNULL(?, img_perfil), banner = IFNULL(?, banner) WHERE id_perfil = ?",
      [nombre, apellido, profesion, descripcion, img_perfil, banner, id]
      //el id hace referencia al declarado como const { id } = req.params;
    );
    if (result.affectedRows === 0) {
      //si las filas afectadas fueron igual a 0, entonce
      return res.status(404).json({ message: "perfil not foud" });
    }
    const [rows] = await pool.query(
      "SELECT * FROM perfil WHERE id_perfil = ?",
      //el id hace referencia al declarado como const { id } = req.params;
      [id]
    );
    res.json(rows[0]);
    console.log("despues");
  } catch (error) {
    return res.status(500).json({ message: "Oop!, algo salio mal" });
  }
};

export const deleteDatosPerfil = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM perfil WHERE id_perfil = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "perfil not found" });
    }
    res.sendStatus(204);
    res.send("perfil eliminado");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Oop!, algo salio mal" });
  }
};
