import {NextFunction, Request, Response} from "express";

import {loggerMiddleware} from './logger.middleware'

export default (req: Request, res: Response, next: NextFunction) => {
    loggerMiddleware(req, res, next);
}