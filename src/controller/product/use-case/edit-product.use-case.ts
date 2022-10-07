import {update} from "../../../repository/product/product.repository";
import ProductOutputDto from "../../../model/product/dto/output/product.output.dto";

export default async function updateProduct(id: string, itemData: ProductOutputDto): Promise<ProductOutputDto> {
    return await update(id, itemData);
}



