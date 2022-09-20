import ProductModel from "../model/product/product.model";
import {ProductModelDto} from "../model/product/product.model.dto";

export const findOne = async (id: string): Promise<ProductModelDto> => {
    return ProductModel.findOne({id_: id});
}

export const findAll = async (): Promise<ProductModelDto[]> => {
    return ProductModel.find();
}

export const create = async (itemData: ProductModelDto): Promise<any> => {
    const product = new ProductModel(itemData);
    return await product.save();

}
export const update = async (id: string, itemData: ProductModelDto): Promise<any> => {
   return ProductModel.update({_id: id}, itemData);
}

export const deleteOne = async (id: string): Promise<boolean> => {
    const response = await ProductModel.findByIdAndDelete(id);
    return response != null;
}
