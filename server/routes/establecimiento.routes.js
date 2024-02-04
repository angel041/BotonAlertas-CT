import { Router } from "express";
import {getEstablecimientos,getEstablecimiento,getEstablecimientoN,createEstablecimientos,updateEstablecimientos,deleteEstablecimientos} from "../controllers/Establecimientos.controlador.js";

const router = Router();

router.get('/establecimientos', getEstablecimientos);
router.get('/establecimientos/:id',getEstablecimiento)
router.get('/establecimientos/N/:Nombre',getEstablecimientoN);
router.post('/establecimientos',createEstablecimientos);
router.put('/establecimientos/:id',updateEstablecimientos);
router.delete('/establecimientos/:id',deleteEstablecimientos);

export default router;