import {findAll, findOne} from "../../../repository/product/product.repository";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";
import {plainToClass} from "class-transformer";

export async function getProducts(): Promise<ProductOutputDto[]> {
    return await findAll();
}

export async function getProduct(id: string): Promise<ProductOutputDto> {
    const item = await findOne(id);
    if (item) {
        return plainToClass(ProductOutputDto, {
            title: item.title,
            description: item.description
        });
    } else {
        throw new Error(`Product ${id} not found`);
    }
}


