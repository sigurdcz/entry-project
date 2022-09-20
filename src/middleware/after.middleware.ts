import {NextFunction, Request, Response} from "express";
import {errorMiddleware} from "./error.middleware";

export default (req: Request, res: Response, next: NextFunction) => {
    errorMiddleware(req, res, next);
}