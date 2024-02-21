import { ErrorMessages } from "../constants/ErrorMessages";
import { HttpStatus } from "../constants/HttpStatus";

export default class CustomError extends Error {
    public readonly statusCode: HttpStatus;

    constructor(message?: string, statusCode?: HttpStatus) {
        super(message || ErrorMessages.BAD_REQUEST);
        this.statusCode = statusCode || HttpStatus.BAD_REQUEST;
    }
}