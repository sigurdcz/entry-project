import ProductModel from "../../model/product/product.model";
import ProductOutputDto from "../../model/product/dto/output/product.output.dto";
import ProductInterface from "../../model/product/product.interface";

export const findOne = async (id: string): Promise<ProductInterface> => {
    return ProductModel.findById(id);
}

export const findAll = async (): Promise<ProductOutputDto[]> => {
    return ProductModel.find();
}

export const create = async (itemData: ProductInterface): Promise<any> => {
    const product = new ProductModel(itemData);
    return await product.save();
}

export const update = async (id: string, itemData: ProductInterface): Promise<any> => {
   return ProductModel.findByIdAndUpdate(id, itemData);
}

export const deleteOne = async (id: string): Promise<boolean> => {
    const response = await ProductModel.findByIdAndDelete(id);
    return response != null;
}
