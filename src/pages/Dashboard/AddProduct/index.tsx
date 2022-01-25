import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../../components/Layout/SideBar/SideBar";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
type Inputs = {
  category_id: number;
  image_link: string;
  name: string;
  description: string;
  price: number;
};

const AddProduct: React.FC = ({ props }: any) => {
  const { state } = useContext(AuthContext);
  const { token } = state;
  const [isCategory, setIsCategory] = useState<Array<any>>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/categories`)
      .then((response) => setIsCategory(response.data));
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/products`,
        {
          category_id: Number(data.category_id),
          image: data.image_link,
          name: data.name,
          description: data.description,
          price: Number(data.price),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <SideBar>
      <div className="flex flex-col font-inter">
        <h1 className="text-xl md:text-2xl font-bold">Create new product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left ">
              <h2>Gallery</h2>
              <h3>Upload your product images here</h3>
            </div>
            <div className="bg-white w-full md:w-3/5 flex py-4 px-2 rounded-lg shadow">
              <input
                type="text"
                className="w-full"
                placeholder="images here link only"
                {...register("image_link", { required: true })}
              />
            </div>
            {errors.image_link && (
              <p className="text-red-500">Please enter your product image!</p>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left">
              <h2>Catergory</h2>
            </div>
            <select
              className="bg-white w-full md:w-3/5 flex items-center justify-center px-2 py-4 rounded-lg shadow"
              {...register("category_id", { required: true })}
              defaultValue="1"
            >
              {isCategory?.map((category, i) => (
                <option key={i} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-red-500">
                Please enter your product category!
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4 space-y-4">
            <div className="text-center md:text-left">
              <h2>Description</h2>
            </div>
            <div className="bg-white w-full md:w-3/5 px-4 py-6 rounded-lg space-y-4 shadow">
              <div className="flex flex-col space-y-3">
                <label>Name</label>
                <input
                  type="text"
                  className="border py-1 rounded"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">
                    Please enter your name product!
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-3 ">
                <label>Description</label>
                <textarea
                  className="border h-40 rounded"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <p className="text-red-500">Please enter your description!</p>
                )}
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
                <input
                  type="number"
                  className="border py-1 rounded"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <p className="text-red-500">Please enter your price!</p>
                )}
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
