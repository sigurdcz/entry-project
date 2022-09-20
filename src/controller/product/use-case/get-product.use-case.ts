import {ProductModelDto} from "../../../model/product/product.model.dto";
import {LoggerService} from "../../../service/logger.service";
import {findAll, findOne} from "../../../repository/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";

export async function getProducts(res: Response): Promise<ProductModelDto[]>{
    try {
        return await findAll();
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}

export async function getProduct(id: string, res: Response): Promise<ProductModelDto>{
    try {
        return await findOne(id);
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}


