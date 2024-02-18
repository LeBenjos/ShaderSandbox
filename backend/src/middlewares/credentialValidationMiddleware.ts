import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError.ts";
import { ErrorMessages } from "../constants/ErrorMessages.ts";
import { HttpStatus } from "../constants/HttpStatus.ts";
import { MethodName } from "../constants/MethodName.ts";


export default async function credentialValidationMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if ((req.method === MethodName.POST)) {
            if (!req.body.createShader) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
            const { title, password, imageUrl, author, setting }: { title: string, imageUrl: string, author: string, password: string, setting: { s1: number, s2: number, s3: number } } = req.body.updateShader;
            if (!title || !password || !imageUrl || !author || !setting) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            const { s1, s2, s3 }: { s1: number, s2: number, s3: number } = setting;
            if (!Number(s1) || !Number(s2) || !Number(s3)) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
        } else if (req.method === MethodName.PUT) {
            if (!req.body.password) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            if (!req.body.updateShader) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
            const { title, imageUrl, author, setting }: { title: string, imageUrl: string, author: string, setting: { s1: number, s2: number, s3: number } } = req.body.updateShader;
            if (!title || !imageUrl || !author || !setting) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            const { s1, s2, s3 }: { s1: number, s2: number, s3: number } = setting;
            if (!Number(s1) || !Number(s2) || !Number(s3)) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
        } else if (req.method === MethodName.DELETE) {
            if (!req.body.password) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }

}
