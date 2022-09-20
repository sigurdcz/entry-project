import {ValidateProductBody} from "../../validator/product.validate";
import {get, getOne, update, post} from "../../controller/product/product.controller";
import {remove} from "../../controller/product/product.controller";
import express from 'express';

const productRouter = express.Router();

productRouter
    .post('/',[ValidateProductBody], post)
    .get('/', get)
    .get('/:id', getOne)
    .delete('/:id', remove)
    .patch('/:id', update);

export default productRouter;