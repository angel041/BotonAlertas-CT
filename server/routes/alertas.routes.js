import { Router } from "express";
import {getAlertas,getAlerta,createAlertas,updateAlertas,deleteAlertas} from "../controllers/Alertas.controlador.js";

const router = Router();

router.get('/alertas', getAlertas);
router.get('/alertas/:id',getAlerta);
router.post('/alertas',createAlertas);
router.put('/alertas/:id',updateAlertas);
router.delete('/alertas/:id',deleteAlertas);

export default router;