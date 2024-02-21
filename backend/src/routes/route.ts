import express, { Router } from "express";
import deleteShaderController from "../controllers/deleteShaderController.ts";
import getShaderController from "../controllers/getShaderController.ts";
import getShaderPDFController from "../controllers/getShaderPDFController.ts";
import postShaderController from "../controllers/postShaderController.ts";
import selectShadersController from "../controllers/selectShadersController.ts";
import updateShaderController from "../controllers/updateShaderController.ts";
import welcom from "../controllers/welcom.ts";

const router: Router = express.Router();

router.get('/', welcom);

router.get('/shaders', selectShadersController);
router.post('/shaders', postShaderController);
router.get('/shaders/:id', getShaderController);
router.put('/shaders/:id', updateShaderController);
router.delete('/shaders/:id', deleteShaderController);
router.get('/shaders/:id/pdf', getShaderPDFController);

export default router;
