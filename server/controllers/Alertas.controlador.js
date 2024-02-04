import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getAlertas = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia ORDER BY id_Emergencia  ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({ message: error.message});
    }
}
//Busqueda por id
export const getAlerta = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia WHERE 	id_Emergencia  = ?",[req.params.id] );
        if (result.length === 0)
            return res.status(404).json({ message: "Task not emergencia "});
        res.json(result[0]);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
//Creacion de nuevo emergencia
export const createAlertas = async (req, res) => {
    try{
        const { Fecha_Final, Ubicacion_Origen,Estado,Tipo } = req.body;
        const [result] = await pool.query('INSERT INTO emergencia(Fecha_Final, Ubicacion_Origen, Estado, Tipo) VALUES (? , ?, ?, ?)',
        [Fecha_Final, Ubicacion_Origen,Estado,Tipo]
        );
        res.json({
            id: result.insertId,
            Fecha_Final, 
            Ubicacion_Origen,
            Estado,
            Tipo,
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
   
}
//Actualizar un registro de emergencia
export const updateAlertas= async(req, res) => {
    try{
        
    const result = await pool.query("UPDATE emergencia SET ? WHERE id_Emergencia = ?", [req.body, req.params.id]);
    res.json(result);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
///Eliminar un dato
export const deleteAlertas = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM emergencia WHERE id_Emergencia = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro el establecimiento"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}