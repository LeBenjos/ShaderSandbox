import { NextFunction, Request, Response } from "express";

export default function welcom(req: Request, res: Response, next: NextFunction): void {
    res.json("Hello World, I'm an API for ShaderSandbox, go to https://github.com/LeBenjos/ShaderSandbox for more pieces of information");
}