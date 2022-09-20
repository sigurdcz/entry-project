import {create} from '../repository/product.repository'
import {ProductModelDto} from "../model/product/product.model.dto";
import {DatabaseService} from "../service/database.service";
import * as dotenv from 'dotenv';
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
    const item = <ProductModelDto>product;
    create(item)
}