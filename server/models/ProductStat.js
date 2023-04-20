import mongoose from "mongoose";

const ProductStatScema = new mongoose.Schema(
	{
		productId: String,
		yearlySalesTotal: Number,
		yearlySalesSoldUnits: Number,
		year: Number,
		monthlyData: [
			{
				month: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
		dailyData: [
			{
				month: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
	},
	{ timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatScema);
export default ProductStat;
