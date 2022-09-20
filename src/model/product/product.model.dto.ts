import {ProductModelInterface} from "./product.model.interface";

export class ProductModelDto implements ProductModelInterface{
    title: string;
    description: string;
}