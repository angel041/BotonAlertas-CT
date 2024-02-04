import { pool } from "../db.js"


export const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query( "SELECT * FROM usuario ORDER BY id_Usuario  ASC");
        res.json(result);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
//Busqueda por id
export const getUsuario = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM usuario WHERE 	id_Usuario  = ?",[req.params.id] );

        if (result.length === 0)
            return res.status(404).json({ message: "No coincide la policia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}




    export const createUsuarios = async (req, res) => {
        try {
            const { NombreU, ApellidosU, EdadU, CurpU, CorreoU, password, Registro_Facial, Fecha_NaU } = req.body;
            const [result] = await pool.query('INSERT INTO usuario(NombreU, ApellidosU, EdadU,CurpU, CorreoU, password, Registro_Facial, Fecha_NaU) VALUES (?, ?, ?, ?, ?, ?,?,?)',
                [NombreU, ApellidosU, EdadU, CurpU, CorreoU, password, Registro_Facial, Fecha_NaU]
            );
            res.json({
                id: result.insertId,
                NombreU,
                ApellidosU,
                EdadU,
                CurpU,
                CorreoU,
                password,
                Registro_Facial,
                Fecha_NaU
            });
    
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
//Actualizar un registro de emergencia
export const updateUsuarios= async(req, res) => {
    try{
        
    const result = await pool.query("UPDATE usuario SET ? WHERE id_Usuario = ?", [req.body, req.params.id]);
    res.json(result);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
///Eliminar un dato
export const deleteUsuarios = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM usuario WHERE id_Usuario = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro la Ambulancias"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
