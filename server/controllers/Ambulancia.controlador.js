import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getAmbulancias = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM ambulancia Where id_Ambulacia !=16 ORDER BY id_Ambulacia  ASC");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}
//Busqueda por id
export const getAmbulancia = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM ambulancia WHERE 	id_Ambulacia  = ?",[req.params.id] );

        if (result.length === 0)
            return res.status(404).json({ message: "No coincide la ambulancia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

//Creacion de nuevo emergencia
export const createAmbulancias = async (req, res) => {
    try{
        const { NombresP,ApellidosP, TelefonoP,PasswordP,CorreoP,Turno,Numero_Ambulancia } = req.body;
        const [result] = await pool.query('INSERT INTO ambulancia(NombresP,ApellidosP, TelefonoP, PasswordP, CorreoP,Turno,Numero_Ambulancia) VALUES (?,? , ?, ?, ?,?,?)',
        [NombresP,ApellidosP, TelefonoP,PasswordP,CorreoP,Turno,Numero_Ambulancia]
        );
        res.json({
            id: result.insertId,
            NombresP,
            ApellidosP,
            TelefonoP,
            PasswordP,
            CorreoP,
            Turno,
            Numero_Ambulancia,
            
            
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
   
}
//Actualizar un registro de emergencia
export const updateAmbulancias= async(req, res) => {
    try{
        
    const result = await pool.query("UPDATE ambulancia SET ? WHERE id_Ambulacia = ?", [req.body, req.params.id]);
    res.json(result);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}
///Eliminar un dato
export const deleteAmbulancias = async(req, res) => {

    try{
    const [result] = await pool.query("DELETE FROM ambulancia WHERE id_Ambulacia  = ?", [req.params.id]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "No se encontro la Ambulancias"});
    return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}