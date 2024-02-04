import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getEmergencias = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia HE  JOIN usuario US ON HE.id_Usuario = US.id_Usuario JOIN emergencia EM ON HE.id_Emergencia = EM.id_Emergencia JOIN policia PO On HE.id_Policia = PO.id_Policia JOIN ambulancia AM ON HE.id_Ambulacia  = AM.id_Ambulacia  ORDER BY HE.id_Emergencia   DESC");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}
//Contar los datos que no han sido vistos
export const getContarEmergencias= async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT COUNT(*) FROM emergencia WHERE Visto = 'no_visto'");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }

}
//Busqueda por id solo datos 
export const getEmergenciaDatos = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia  WHERE id_Emergencia  = ?",[req.params.id] );
        

        if (result.length === 0)
            return res.status(404).json({ message: "Task not emergencia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
//Busqueda por id
export const getEmergencia = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia  HE JOIN usuario US ON HE.id_Usuario = US.id_Usuario JOIN emergencia EM ON HE.id_Emergencia = EM.id_Emergencia JOIN policia PO On HE.id_Policia = PO.id_Policia JOIN ambulancia AM ON HE.id_Ambulacia  = AM.id_Ambulacia  WHERE HE.id_Usuario_E  = ?",[req.params.id] );
        

        if (result.length === 0)
            return res.status(404).json({ message: "Task not emergencia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

    export const updateEmergencia= async(req, res) => {
        try{
            
        const result = await pool.query("UPDATE emergencia SET ? WHERE id_Emergencia = ?", [req.body, req.params.id]);
        res.json(result);
    
        }catch(error){
            return res.status(500).json({message: error.message});
        }
    }
///Eliminar un dato
export const deleteEmergencia = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM emergencia WHERE id_Emergencia = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro la Emergencia"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
