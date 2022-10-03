import {LoggerService} from "../../../service/logger.service";
import {update} from "../../../repository/product/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";

export default async function updateProduct(id:string, itemData: ProductOutputDto, res: Response): Promise<ProductOutputDto>{
    try {
        return await update(id,itemData);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}



