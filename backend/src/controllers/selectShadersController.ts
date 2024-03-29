import { NextFunction, Request, Response } from "express";
import ShaderService from "../services/ShaderService";

export default async function selectShadersController(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await ShaderService.SelectShaders());
}