import {NextFunction, Request, Response} from "express";

export const errorMiddleware = (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({error:{message:"Page not found"}});
}

