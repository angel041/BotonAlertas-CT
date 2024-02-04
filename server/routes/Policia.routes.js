import { Router } from "express";
import {getPolicias,getPolicia,createPolicias,updatePolicias,deletePolicias} from "../controllers/Policia.controlador.js";

const router = Router();

router.get('/policias', getPolicias);
router.get('/policias/:id',getPolicia);
router.post('/policias',createPolicias);
router.put('/policias/:id',updatePolicias);
router.delete('/policias/:id',deletePolicias);

export default router;