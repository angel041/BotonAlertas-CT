import { pool } from "../db.js"
//Busqueda de todos lodos los registros
export const getEstablecimientos = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM establecimiento ORDER BY id_Establecimiento  ASC");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}
//Busqueda por id
export const getEstablecimiento = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM establecimiento WHERE 	id_Establecimiento  = ?",[req.params.id] );

        if (result.length === 0)
            return res.status(404).json({ message: "Task not establecimiento "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
//Busqueda por nombre
export const getEstablecimientoN = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM establecimiento WHERE 	Nombre  = ?",[req.params.Nombre] );

        if (result.length === 0)
            return res.status(404).json({ message: "No se encontro "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
//Creacion de nuevo establecimientos
export const createEstablecimientos = async (req, res) => {
    try{
        const { Nombre, Direccion,	finalHorario,InicioHorario,Encargado } = req.body;
        const [result] = await pool.query('INSERT INTO establecimiento(Nombre, Direccion, finalHorario,InicioHorario,Encargado) VALUES (?,?,?,?,?)',
        [Nombre, Direccion,	finalHorario,InicioHorario,Encargado]
        );
        res.json({
            id: result.insertId,
            Nombre, 
            Direccion,
            finalHorario,
            InicioHorario,
            Encargado,
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
   
}
//Actualizar un registro de establecimiento
export const updateEstablecimientos= async(req, res) => {
    try{
        
    const result = await pool.query("UPDATE establecimiento SET ? WHERE id_Establecimiento = ?", [req.body, req.params.id]);
    res.json(result);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
///Eliminar un dato
export const deleteEstablecimientos = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM establecimiento WHERE id_Establecimiento = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro el establecimiento"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}