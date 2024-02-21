import express, { Router } from "express";
import deleteShaderController from "../controllers/deleteShaderController";
import getShaderController from "../controllers/getShaderController";
import getShaderPDFController from "../controllers/getShaderPDFController";
import postShaderController from "../controllers/postShaderController";
import selectShadersController from "../controllers/selectShadersController";
import updateShaderController from "../controllers/updateShaderController";
import welcom from "../controllers/welcom";

const router: Router = express.Router();

router.get('/', welcom);

router.get('/shaders', selectShadersController);
router.post('/shaders', postShaderController);
router.get('/shaders/:id', getShaderController);
router.put('/shaders/:id', updateShaderController);
router.delete('/shaders/:id', deleteShaderController);
router.get('/shaders/:id/pdf', getShaderPDFController);

export default router;
