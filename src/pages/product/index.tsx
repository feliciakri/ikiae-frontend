import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";
import { AuthContext } from "../../context/AuthContext";
import { formatRupiah } from "../../hooks/useFormatIDR";

const Product: React.FC = () => {
  const [isProduct, setIsProduct] = useState<Record<string, any>>();
  const [isAdded, setIsAdded] = useState(false);
  const { slug } = useParams();
  const { state } = useContext(AuthContext);
  const { isLogged } = state;
  const price = formatRupiah(isProduct?.price);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/products/${slug}`)
      .then((response) => setIsProduct(response.data));
  }, [slug]);

  const addCartHandler = () => {
    const product = {
      product_id: isProduct?.id,
      quantity: 1,
    };
    axios
      .all([
        axios.post(`${process.env.REACT_APP_API_KEY}/carts`, product, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }),

        axios.get(`${process.env.REACT_APP_API_KEY}/carts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }),
      ])
      .then(
        axios.spread((dataOne, dataTwo) => {
          console.log(dataOne, dataTwo);
          setIsAdded(true);
          setTimeout(() => {
            setIsAdded(false);
          }, 500);
        })
      );
    // axios
    //   .post(`${process.env.REACT_APP_API_KEY}/carts`, product, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${state.token}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
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
            src={isProduct?.image || "/logo192.png"}
            alt="product"
          />
        </div>
        <div className="sm:w-3/5 sm:px-20 my-20 sm:my-0 font-inter ">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">{isProduct?.name}</h1>
            <h2 className="text-2xl"> {price}</h2>
            <p className="text-justify">{isProduct?.description}</p>
          </div>
          <div className="flex flex-col mt-10 space-y-8">
            <div className="flex flex-row items-center space-x-3">
              <CheckIcon className="w-5 h-5 text-green-400" />
              <h2> in stock and ready to ship</h2>
            </div>

            {isLogged ? (
              <button
                className={`${
                  isAdded ? "bg-green-400" : "bg-blue-400"
                } text-white py-2 rounded`}
                onClick={addCartHandler}
              >
                {isAdded ? "Added ✓" : "Add to cart"}
              </button>
            ) : (
              <button
                className="bg-gray-500
                 text-white py-2 rounded"
              >
                You must to login!
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
