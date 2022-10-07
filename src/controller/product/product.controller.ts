import createProducts from "./use-case/create-product.use-case";
import {getProduct, getProducts} from "./use-case/get-product.use-case";
import deleteProduct from "./use-case/delete-product.use-case";
import updateProduct from "./use-case/edit-product.use-case";
import {Response, Request} from "express";
import ProductInputDto from "../../model/product/dto/input/product.input.dto";
import {LoggerService} from "../../service/logger.service";
import {responseError} from "../../service/error.service";

export async function post(request: Request, response: Response): Promise<void> {
    try {
        const productData = <ProductInputDto>{...request.body};
        const item = await createProducts(productData);
        response.json(item);
    } catch (e) {
        LoggerService.error(e);
        responseError(response, [e.toString()])
    }
}

export async function update(request: Request, response: Response): Promise<void> {
    try {
        const productData = <ProductInputDto>{...request.body};
        const item = await updateProduct(request.params.id, productData);
        response.json(item);
    } catch (e) {
        LoggerService.error(e);
        responseError(response, [e.toString()])
    }
}

export async function get(request: Request, response: Response): Promise<void> {
    try {
        const items = await getProducts();
        response.json(items);
    } catch (e) {
        LoggerService.error(e);
        responseError(response, [e.toString()])
    }
}

export async function remove(request: Request, response: Response): Promise<void> {
    try {
        const count = await deleteProduct(request.params.id)
        response.json(count);
    } catch (e) {
        LoggerService.error(e);
        responseError(response, [e.toString()])
    }
}

export async function getOne(request: Request, response: Response): Promise<void> {
    try {
        const item = await getProduct(request.params.id)
        response.json(item);
    } catch (e) {
        LoggerService.error(e);
        responseError(response, [e.toString()])
    }
}
