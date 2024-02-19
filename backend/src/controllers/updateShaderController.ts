import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError.ts";
import { ErrorMessages } from "../constants/ErrorMessages.ts";
import { HttpStatus } from "../constants/HttpStatus.ts";
import SettingService from "../services/SettingService.ts";
import ShaderService from "../services/ShaderService.ts";

export default async function updateShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const updatedShaderData = await ShaderService.UpdateShaderById(Number(req.params.id), req.body.updateShader);
        if (!updatedShaderData) {
            throw new CustomError(ErrorMessages.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
        } else {
            await SettingService.UpdateSettingById(Number(req.params.id), req.body.updateShader);
        }

        res.json(updatedShaderData);
    } catch (e: unknown) {
        next(e);
    }
}