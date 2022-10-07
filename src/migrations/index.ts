import {create} from '../repository/product/product.repository'
import {DatabaseService} from "../service/database.service";
import * as dotenv from 'dotenv';
import ProductInputDto from "../model/product/dto/input/product.input.dto";
dotenv.config();

//DB connect
new DatabaseService().connect(()=>{
        console.log("DB success Connect");
    }
);

const products = [
    {
        "title": "Banana",
        "description": "Sweet and fresh"
    },
    {
        "title": "Apple",
        "description": "Delicous fruit"
    }
];

for (const product of products) {
    const item = <ProductInputDto>product;
    create(item)
}