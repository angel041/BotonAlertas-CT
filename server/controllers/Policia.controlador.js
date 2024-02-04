import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getPolicias = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM policia Where id_Policia !=16  ORDER BY id_Policia  ASC");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}
//Busqueda por id
export const getPolicia = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM policia WHERE 	id_Policia  = ?",[req.params.id] );

        if (result.length === 0)
            return res.status(404).json({ message: "No coincide la policia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

//Creacion de nuevo emergencia
export const createPolicias = async (req, res) => {
    try{
        const { NombresPo, ApellidosPo,EdadPo,TelefonoPo,PasswordPo,CorreoPo,CurpPo,TurnoPo,Numero_Patrulla} = req.body;
        const [result] = await pool.query('INSERT INTO policia(NombresPo, ApellidosPo, EdadPo, TelefonoPo,PasswordPo,CorreoPo,CurpPo,TurnoPo,Numero_Patrulla) VALUES (?,?,?,?,?,?,?,?,?)',
        [NombresPo, ApellidosPo,EdadPo,TelefonoPo,PasswordPo,CorreoPo,CurpPo,TurnoPo,Numero_Patrulla]
        );
        res.json({
            id: result.insertId,
            NombresPo, 
            ApellidosPo,
            EdadPo,
            TelefonoPo,
            PasswordPo,
            CorreoPo,
            CurpPo,
            TurnoPo,
            Numero_Patrulla
            
            
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
   
}
//Actualizar un registro de emergencia
export const updatePolicias= async(req, res) => {
    try{
        
    const result = await pool.query("UPDATE policia SET ? WHERE id_Policia = ?", [req.body, req.params.id]);
    res.json(result);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
///Eliminar un dato
export const deletePolicias = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM policia WHERE id_Policia = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro la Ambulancias"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}