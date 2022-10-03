import {LoggerService} from "../../../service/logger.service";
import {deleteOne} from "../../../repository/product/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";

export default async function deleteProduct(id: string, res: Response): Promise<boolean>{
    try {
        return await deleteOne(id);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}
