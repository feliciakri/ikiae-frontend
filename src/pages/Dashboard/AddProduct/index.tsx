import React from "react";
import SideBar from "../../../components/Layout/SideBar/SideBar";

const AddProduct: React.FC = ({ props }: any) => {
  return (
    <SideBar>
      <div className="flex flex-col font-inter">
        <h1 className="text-xl md:text-2xl font-bold">Create new product</h1>
        <form>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left ">
              <h2>Gallery</h2>
              <h3>Upload your product images here</h3>
            </div>
            <div className="bg-white w-full md:w-3/5 flex items-center justify-center py-20 rounded-lg shadow">
              <input type="image" alt="images here" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left">
              <h2>Catergory</h2>
            </div>
            <select className="bg-white w-full md:w-3/5 flex items-center justify-center px-2 py-4 rounded-lg shadow">
              <option disabled selected hidden>
                Select...
              </option>
              <option>hello</option>
              <option>hello</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left">
              <h2>Description</h2>
            </div>
            <div className="bg-white w-full md:w-3/5 px-4 py-6 rounded-lg space-y-4 shadow">
              <div className="flex flex-col space-y-3">
                <label>Name</label>
                <input type="text" className="border py-1 rounded" />
              </div>
              <div className="flex flex-col space-y-3 ">
                <label>Description</label>
                <textarea className="border h-40 rounded" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left">
              <h2>Product Information</h2>
            </div>
            <div className="bg-white w-full md:w-3/5 px-4 py-6 rounded-lg space-y-4 shadow">
              <div className="flex flex-col space-y-3">
                <label>Price</label>
                <input type="number" className="border py-1 rounded" />
              </div>
              <div className="flex flex-col space-y-3">
                <label>Quantity</label>
                <input type="number" className="border py-1 rounded" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white py-4 px-6 rounded-lg">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </SideBar>
  );
};

export default AddProduct;
