import { Router } from "express";
import {getEmergencias,getEmergencia,deleteEmergencia,updateEmergencia,getEmergenciaDatos,getContarEmergencias} from "../controllers/Emergencia.controlador.js";

const router = Router();

router.get('/emergencia', getEmergencias);
router.get('/emergenciasConta',getContarEmergencias)
router.get('/emergencia/:id',getEmergencia);
router.get('/emergenciaDatos/:id',getEmergenciaDatos);
router.delete('/emergencia/:id',deleteEmergencia);
router.put('/emergencia/:id',updateEmergencia);

export default router;