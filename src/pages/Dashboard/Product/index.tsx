import React from "react";
import SideBar from "../../../components/Layout/SideBar/SideBar";
import Table from "../../../components/Table/Table";

const DashboardProduct: React.FC = () => {
  return (
    <SideBar>
      <div className="flex justify-between font-inter mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Product</h1>
        <button className="bg-blue-700 text-white rounded py-1 px-2 text-sm">
          Add product
        </button>
      </div>
      <Table />
    </SideBar>
  );
};

export default DashboardProduct;
