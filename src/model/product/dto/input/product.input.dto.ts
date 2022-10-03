import ProductInterface from "../../product.interface";

export default class ProductInputDto implements ProductInterface{
    title: string;
    description: string;
}