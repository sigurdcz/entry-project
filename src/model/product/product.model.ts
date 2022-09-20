import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    title: String,
    description: String,
});

export default mongoose.model('Product', ProductModel) ;