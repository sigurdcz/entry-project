import {NextFunction, Request, Response} from "express";

export const ValidateProductBody = (req: Request, res: Response, next: NextFunction)=>{
    const errorMessages = [];
    if (!req.body.title){
        errorMessages.push(  {
            description: {
                message: "[Title] is Required",
                type: String,
                length: 20
            },

        })
    }
    if (!req.body.description){
        errorMessages.push(  {
            description: {
                message: "[Description] is Required",
                type: String,
                length: 20
            },
        })
    }


    if(errorMessages.length === 0){
        next();
    }else{
        res.json({error:errorMessages});

    }
}