import { Router } from "express";
import {getMonitoreos} from "../controllers/Monitoreo.controlador.js";


const router = Router();

router.get('/monitorei', getMonitoreos);


export default router;