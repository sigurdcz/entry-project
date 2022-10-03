
import {LoggerService} from "../../../service/logger.service";
import {findAll, findOne} from "../../../repository/product/product.repository";
import {responseError} from "../../../service/error.service";
import {Response} from "express";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";
import {plainToClass, plainToInstance} from "class-transformer";

export async function getProducts(res: Response): Promise<ProductOutputDto[]>{
    try {
        return await findAll();
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}

export async function getProduct(id: string, res: Response): Promise<ProductOutputDto>{
    try {
        const item =  await findOne(id);
        console.log({AITM:item, PLTI: plainToInstance(ProductOutputDto ,item)})
        return plainToClass(ProductOutputDto, {
            title: item.title,
            description: item.description
        });
    } catch (e) {
        LoggerService.error(e);
        responseError(res, [e.toString()])
    }
}


