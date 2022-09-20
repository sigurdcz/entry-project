import {ProductModelDto} from "../../../model/product/product.model.dto";
import {LoggerService} from "../../../service/logger.service";
import {update} from "../../../repository/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";

export default async function updateProduct(id:string, itemData: ProductModelDto, res: Response): Promise<ProductModelDto>{
    try {
        return await update(id,itemData);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}



