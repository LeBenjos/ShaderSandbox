import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError";
import { ErrorMessages } from "../constants/ErrorMessages";
import { HttpStatus } from "../constants/HttpStatus";
import ShaderService from "../services/ShaderService";


export default async function idValidationMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = Number(req.params.id);
        if (!id) throw new CustomError(ErrorMessages.INVALID_ID, HttpStatus.BAD_REQUEST);
        if (!(await ShaderService.CheckId(id))) throw new CustomError(ErrorMessages.UNKNOWN_ID, HttpStatus.NOT_FOUND);
        next();
    } catch (e) {
        next(e);
    }

}
