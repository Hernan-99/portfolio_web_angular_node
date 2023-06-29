import { pool } from "../db.js";

export const getProyectos = async (req, res) => {
  try {
    //[rows] significa que es un array
    const [rows] = await pool.query("SELECT * FROM proyecto");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Oop!, ocurrio un error" });
  }
};

export const getProyecto = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM proyecto WHERE id_proyecto = ?",
    [req.params.id]
  );

  //condicional para verificar que ese proyecto existe
  if (rows.length <= 0) {
    return res.status(404).json({ message: "El proyecto no existe" });
  } else {
    res.json(rows[0]);
  }
  try {
  } catch (error) {
    res.status(500).json({ message: "Oop!, ocurrio un error" });
  }
};

export const postProyecto = async (req, res) => {
  const {
    nombre_proyecto,
    descripcion_proyecto,
    link_url,
    link_repo,
    img_proyecto,
  } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO proyecto (nombre_proyecto, descripcion_proyecto, link_url, link_repo, img_proyecto, perfil_id_perfil) VALUES (?,?,?,?,?,1)",
      [nombre_proyecto, descripcion_proyecto, link_url, link_repo, img_proyecto]
    );
    res.send({
      id: rows.insertId,
      nombre_proyecto,
      descripcion_proyecto,
      link_url,
      link_repo,
      img_proyecto,
    });
  } catch (error) {
    res.status(500).json({ message: "Oops!, algo salio mal" });
    console.log(error);
  }
};

export const patchProyecto = async (req, res) => {
  const { id } = req.params;
  const {
    nombre_proyecto,
    descripcion_proyecto,
    link_url,
    link_repo,
    img_proyecto,
  } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE proyecto SET nombre_proyecto = IFNULL(?, nombre_proyecto), descripcion_proyecto = IFNULL(?, descripcion_proyecto), link_url = IFNULL(?, link_url), link_repo = IFNULL(?, link_repo), img_proyecto = IFNULL(?, img_proyecto) WHERE id_proyecto = ?",
      [
        nombre_proyecto,
        descripcion_proyecto,
        link_url,
        link_repo,
        img_proyecto,
        id,
      ]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }
    const [rows] = await pool.query(
      "SELECT * FROM proyecto WHERE id_proyecto = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Oop!, algo salio mal" });
    console.log(error);
  }
};

export const deleteProyecto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM proyecto WHERE id_proyecto = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "proyecto no encontrado" });
    }
    res.sendStatus(204);
    res.send("proyecto eliminado");
  } catch (error) {
    res.status(500).json({ message: "Oops!, algo salio mal" });
    console.log(error);
  }
};
