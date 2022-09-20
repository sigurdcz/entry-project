import {ProductModelDto} from "../../../model/product/product.model.dto";
import {LoggerService} from "../../../service/logger.service";
import {create} from "../../../repository/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";

export default async function createProducts(itemData: ProductModelDto, res: Response): Promise<ProductModelDto>{
    try {
        return await create(itemData);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}