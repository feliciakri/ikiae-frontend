import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Product from "../pages/product";
import DashboardProduct from "../pages/Dashboard/Product";
import Checkout from "../pages/checkout";
import OrderHistory from "../components/MyOrders/OrderHistory";

const Router: React.FC = (props: any) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="product/:slug" element={<Product />} />
				<Route
					path="dashboard/product"
					element={<DashboardProduct />}
				/>
				<Route path="checkout" element={<Checkout />} />
				<Route path="orders" element={<OrderHistory />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
