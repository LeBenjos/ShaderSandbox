import { NextFunction, Request, Response } from "express";
import Shader from "../models/Shader.ts";
import SettingService from "../services/SettingService.ts";
import ShaderService from "../services/ShaderService.ts";

export default async function getShaderById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const shader: Shader = await ShaderService.GetShaderById(Number(req.params.id));
    shader.setting = await SettingService.GetSettingById(shader.id);
    res.json(shader)
}