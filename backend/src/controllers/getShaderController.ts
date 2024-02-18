import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError.ts";
import { ErrorMessages } from "../constants/ErrorMessages.ts";
import { HttpStatus } from "../constants/HttpStatus.ts";
import Shader from "../models/Shader.ts";
import SettingService from "../services/SettingService.ts";
import ShaderService from "../services/ShaderService.ts";

export default async function getShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = Number(req.params.id);
        const shader: Shader = await ShaderService.GetShaderById(id);
        shader.setting = await SettingService.GetSettingById(shader.id);
        if (!shader.setting) {
            await ShaderService.AdminDeleteShader(id);
            throw new CustomError(ErrorMessages.UNKNOWN_ID, HttpStatus.NOT_FOUND)
        };
        res.json(shader);
    } catch (e: unknown) {
        next(e as CustomError);
    }

}