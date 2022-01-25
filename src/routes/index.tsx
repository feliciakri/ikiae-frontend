import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Product from "../pages/product";
import DashboardProduct from "../pages/Dashboard/Product";
import Checkout from "../pages/checkout";
import OrderHistory from "../components/MyOrders/OrderHistory";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/notfound";
import AddProduct from "../pages/Dashboard/AddProduct";
import EditProduct from "../pages/Dashboard/EditProduct";
const Router: React.FC = (props: any) => {
	const { state } = useContext(AuthContext);
	const { isLogged } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product/:slug" element={<Product />} />{" "}
        {isLogged && (
          <Route path="dashboard/product" element={<DashboardProduct />} />
        )}
        {isLogged && <Route path="checkout" element={<Checkout />} />}
        {isLogged && (
          <Route
            path="dashboard/product/add-product"
            element={<AddProduct />}
          />
        )}
        {isLogged && (
          <Route
            path="dashboard/product/edit-product/:id"
            element={<EditProduct />}
          />
        )}
        {isLogged && <Route path="orders" element={<OrderHistory />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
