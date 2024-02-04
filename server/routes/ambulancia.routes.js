import { Router } from "express";
import {getAmbulancias,getAmbulancia,createAmbulancias,updateAmbulancias,deleteAmbulancias} from "../controllers/Ambulancia.controlador.js";

const router = Router();

router.get('/ambulancias', getAmbulancias);
router.get('/ambulancias/:id',getAmbulancia);
router.post('/ambulancias',createAmbulancias);
router.put('/ambulancias/:id',updateAmbulancias);
router.delete('/ambulancias/:id',deleteAmbulancias);

export default router;