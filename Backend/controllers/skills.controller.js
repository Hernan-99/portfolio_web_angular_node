import { pool } from "../db.js";

export const getSkills = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM skill");
    res.send(rows);
  } catch (error) {
    console.log(error);
  }
};

export const getSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM skill WHERE id_skill = ?", [
      id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "La skill no existe" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Oop!, ocurrio un error" });
  }
};

export const postSkills = async (req, res) => {
  const { nombre_skill, icono_skill } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO skill (nombre_skill, icono_skill, perfil_id_perfil) VALUES (?,?,1)",
      [nombre_skill, icono_skill]
    );
    res.json({ id: rows.insertId, nombre_skill, icono_skill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oops!, algo salio mal" });
  }
};

export const patchSkill = async (req, res) => {
  const { id } = req.params;
  const { nombre_skill, icono_skill } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE skill SET nombre_skill = IFNULL(?, nombre_skill), icono_skill = IFNULL(?, icono_skill) WHERE id_skill = ?",
      [nombre_skill, icono_skill, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "La skill no existe" });
    }
    const [rows] = await pool.query("SELECT * FROM skill WHERE id_skill = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Oops!, algo salio mal" });
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM skill WHERE id_skill = ?", [
      id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Skill no encontrada" });
    }
    res.sendStatus(204);
    res.send("Skill eliminada");
  } catch (error) {
    res.status(500).json({ message: "Oops!, algo salio mal" });
  }
};
