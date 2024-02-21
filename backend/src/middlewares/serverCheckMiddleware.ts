import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError";
import { db } from "../configs/databases/database.config";
import { ErrorMessages } from "../constants/ErrorMessages";
import { HttpStatus } from "../constants/HttpStatus";

const serverCheckMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    try {
        if (!db) throw new CustomError(ErrorMessages.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        next();
    } catch (e) {
        next(e);
    }
}

export default serverCheckMiddleware
