import ProductInterface from "../../product.interface";
import {Exclude, Expose, Transform} from "class-transformer";

@Exclude()
export default class ProductOutputDto implements ProductInterface{
    @Expose()
    title: string;

    @Expose()
    @Transform(item=>(item.value+";"))
    description: string;
}