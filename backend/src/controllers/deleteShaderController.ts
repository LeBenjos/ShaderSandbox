import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError";
import { ErrorMessages } from "../constants/ErrorMessages";
import { HttpStatus } from "../constants/HttpStatus";
import ShaderService from "../services/ShaderService";

export default async function deleteShaderController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const deletedData = await ShaderService.DeleteShaderById(Number(req.params.id), req.body.password);
        if (!deletedData) throw new CustomError(ErrorMessages.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
        res.status(HttpStatus.ACCEPTED).json(deletedData);
    } catch (e: unknown) {
        next(e as CustomError);
    }
}