import express from "express";
import mongoose from "mongoose";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import { middleWare } from "./helper.js";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import { dataUser, dataProduct, dataProductStat } from "./data/index.js";

// CONFIGURATIONS
const app = express();
middleWare(app);

// ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Connected to mongoDB`);
		app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

		/* ---- INSERT ONLY ONE TIME  ----*/

		// User.insertMany(dataUser);
		// Product.insertMany(dataProduct);
		// ProductStat.insertMany(dataProductStat);
	})
	.catch((error) => console.error(error));
