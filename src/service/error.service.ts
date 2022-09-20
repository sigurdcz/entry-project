import {Response} from "express";

export const responseError = (res: Response, messages : string|object[] = []): void => {
    const error = {
        state: "error",
        messages
    }

    res.status(400).json(error);
}
