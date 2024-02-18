import { NextFunction, Request, Response } from "express";
import ShaderService from "../services/ShaderService.ts";

export default async function deleteShaderById(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await ShaderService.DeleteShaderById(Number(req.params.id), req.body.password))
}