import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Product from "../pages/product";

const Router: React.FC = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
