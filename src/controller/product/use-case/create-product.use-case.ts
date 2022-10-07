import {create} from "../../../repository/product/product.repository";
import ProductInterface from "../../../model/product/product.interface";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";

export default async function createProducts(itemData: ProductInterface): Promise<ProductOutputDto> {
    return await create(itemData);
}