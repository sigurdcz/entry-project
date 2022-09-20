import {LoggerService} from "../service/logger.service";
import {NextFunction, Request, Response} from "express";

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    LoggerService.log({
        url: req.url,
        headers: req.headers,
        body: req.body
    });
    next();
}

