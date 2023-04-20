import mongoose from "mongoose";

const ProductScema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		description: String,
		category: String,
		rating: Number,
		supply: Number,
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductScema);
export default Product;
