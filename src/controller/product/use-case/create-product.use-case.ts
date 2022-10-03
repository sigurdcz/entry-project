import {LoggerService} from "../../../service/logger.service";
import {create} from "../../../repository/product/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";
import ProductInterface from "../../../model/product/product.interface";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";

export default async function createProducts(itemData: ProductInterface, res: Response): Promise<ProductOutputDto>{
    try {
        return await create(itemData);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}