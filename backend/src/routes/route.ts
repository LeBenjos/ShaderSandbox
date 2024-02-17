import express, { Router } from "express";
import deleteShaderById from "../controllers/deleteShaderById.ts";
import getShaderById from "../controllers/getShaderById.ts";
import postShader from "../controllers/postShader.ts";
import selectShaders from "../controllers/selectShaders.ts";
import updateShaderById from "../controllers/updateShaderById.ts";
import welcom from "../controllers/welcom.ts";

const router: Router = express.Router();

router.get('/', welcom);

router.get('/shaders', selectShaders);
router.post('/shaders', postShader);
router.get('/shaders/:id', getShaderById);
router.put('/shaders/:id', updateShaderById);
router.delete('/shaders/:id', deleteShaderById);

export default router;
