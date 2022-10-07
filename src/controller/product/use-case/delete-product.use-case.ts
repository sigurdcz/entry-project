import {deleteOne} from "../../../repository/product/product.repository";

export default async function deleteProduct(id: string): Promise<boolean> {
    return await deleteOne(id);
}
