import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getMonitoreos = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM monitoreo ORDER BY id_Monitoreo  ASC");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}