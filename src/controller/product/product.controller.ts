import {ProductModelDto} from "../../model/product/product.model.dto";
import createProducts from "./use-case/create-product.use-case";
import {getProduct, getProducts} from "./use-case/get-product.use-case";
import deleteProduct from "./use-case/delete-product.use-case";
import updateProduct from "./use-case/edit-product.use-case";

import {Response, Request} from "express";

export  async function post(request: Request, response: Response){
    const productData = <ProductModelDto>{...request.body};
    const item = await createProducts(productData, response);
    response.json(item);
}

export  async function update(request: Request, response: Response){
    const productData = <ProductModelDto>{...request.body};
    const item = await updateProduct(request.params.id, productData, response);
    response.json(item);
}

export  async function get(request: Request, response: Response){
    const items = await getProducts(response);
    return response.json(items);
}

export  async function remove(request: Request, response: Response){
    const count = await deleteProduct(request.params.id, response)
    return response.json(count);
}

export  async function getOne(request: Request, response: Response){
    const item = await getProduct(request.params.id, response)
    response.json(item);
}
