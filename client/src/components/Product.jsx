import { Card, useTheme } from "@mui/material";
import React from "react";

const Product = ({ _id, name, description, price, rating, category, supply, stat }) => {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);

	return <Card></Card>;
};

export default Product;
