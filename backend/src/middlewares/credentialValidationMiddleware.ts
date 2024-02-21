import { NextFunction, Request, Response } from "express";
import CustomError from "../components/CustomeError";
import { ErrorMessages } from "../constants/ErrorMessages";
import { HttpStatus } from "../constants/HttpStatus";
import { MethodName } from "../constants/MethodName";


export default async function credentialValidationMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        if ((req.method === MethodName.POST)) {
            if (!req.body.createShader) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            const { title, password, image_url, author, setting }: { title: string, image_url: string, author: string, password: string, setting: { s1: number, s2: number, s3: number } } = req.body.createShader;
            if (!title || !password || !image_url || !author || !setting) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            const { s1, s2, s3 }: { s1: number, s2: number, s3: number } = setting;
            if (!Number(s1) || !Number(s2) || !Number(s3)) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);
        } else if (req.method === MethodName.PUT) {
            if (!req.body.updateShader) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

            const { title, password, image_url, author, setting }: { title: string, password: string, image_url: string, author: string, setting: { s1: number, s2: number, s3: number } } = req.body.updateShader;
            if (!title || !password || !image_url || !author || !setting) throw new CustomError(ErrorMessages.INVALID_DATA, HttpStatus.BAD_REQUEST);

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
