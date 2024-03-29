import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../constants/HttpStatus";
import SettingService from "../services/SettingService";
import ShaderService from "../services/ShaderService";

export default async function postShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const createShaderData = await ShaderService.CreateShader(req.body.createShader);
        if (createShaderData) {
            const creatSetting = { ...req.body.createShader.setting, shader_id: createShaderData };
            await SettingService.CreateSetting(creatSetting);
        }

        res.status(HttpStatus.CREATED).json(createShaderData);
    } catch (e: unknown) {
        next(e);
    }
}