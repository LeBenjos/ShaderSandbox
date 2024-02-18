import { NextFunction, Request, Response } from "express";
import SettingService from "../services/SettingService.ts";
import ShaderService from "../services/ShaderService.ts";

export default async function postShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const createShaderData = await ShaderService.CreateShader(req.body.updateShader);
        if (createShaderData) {
            const creatSetting = { ...req.body.updateShader.setting, shader_id: createShaderData };
            console.log(creatSetting);
            await SettingService.CreateSetting(creatSetting);
        }

        res.json(createShaderData);
    } catch (e: unknown) {
        next(e);
    }
}