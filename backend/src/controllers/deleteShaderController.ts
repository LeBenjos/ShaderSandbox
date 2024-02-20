import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError.ts";
import { ErrorMessages } from "../constants/ErrorMessages.ts";
import { HttpStatus } from "../constants/HttpStatus.ts";
import ShaderService from "../services/ShaderService.ts";

export default async function deleteShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const deletedData = await ShaderService.DeleteShaderById(Number(req.params.id), req.body.password);
        if (!deletedData) throw new CustomError(ErrorMessages.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
        res.status(HttpStatus.ACCEPTED).json(deletedData);
    } catch (e: unknown) {
        next(e as CustomError);
    }
}