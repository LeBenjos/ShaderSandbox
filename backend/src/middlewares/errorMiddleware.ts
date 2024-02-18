import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError.ts";

const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    res.status(err.statusCode).json(err.message);
}

export default errorMiddleware;
