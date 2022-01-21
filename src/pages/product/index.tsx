import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

const Product: React.FC = () => {
  const [isProduct, setIsProduct] = useState<Record<string, any>>();
  const [isAdded, setIsAdded] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/${slug}`)
      .then((response) => setIsProduct(response.data));
  }, [slug]);

  const addCartHandler = () => {
    // Send data product to Backend
    // const product = {
    //   id: isProduct?.id,
    //   name: isProduct?.title,
    //   price: isProduct?.price,
    //   qty: 1,
    // };
    // axios
    //   .post(`${process.env.REACT_APP_API_KEY}`, product)
    //   .then((response) => {
    //     setIsAdded(true);
    //     setTimeout(() => {
    //       setIsAdded(false);
    //     }, 500);
    //   });
  };
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-2/5 h-80">
          <Link to="/">
            <div className="flex space-x-2 my-4 text-blue-700">
              <ArrowLeftIcon className="w-6 h-6" />
              <span>Back</span>
            </div>
          </Link>
          <img
            className="object-cover h-full w-full rounded"
            src={isProduct?.image}
            alt="product"
          />
        </div>
        <div className="sm:w-3/5 sm:px-20 my-20 sm:my-0 font-inter ">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">{isProduct?.title}</h1>
            <h2 className="text-2xl">${isProduct?.price}</h2>
            <p className="text-justify">{isProduct?.description}</p>
          </div>
          <div className="flex flex-col mt-10 space-y-8">
            <div className="flex flex-row items-center space-x-3">
              <CheckIcon className="w-5 h-5 text-green-400" />
              <h2> in stock and ready to ship</h2>
            </div>
            <button
              className={`${
                isAdded ? "bg-green-400" : "bg-blue-400"
              } text-white py-2 rounded`}
              onClick={addCartHandler}
            >
              {isAdded ? "Added ✓" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
