import { Link } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid";
import ButtonCart from "../UI/Button/ButtonCart";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const CardProduct = ({ product }: any) => {
  const { state } = useContext(AuthContext);
  const { isLogged, token } = state;
  const products = {
    product_id: product.id,
    quantity: 1,
  };
  const addProductHandler = () => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/carts`, products, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="flex flex-col justify-between shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
      <img
        className="object-fill w-full h-48"
        src={product.image || "/logo192.png"}
        alt={product.title}
      />
      <div className="relative px-4 font-inter">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-base md:text-xl text-gray-800">
            {product.title}
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            {product.description}
          </p>
        </Link>
      </div>

      <div className="p-4">
        <h3 className="py-3 font-bold text-lg">RP {product.price}</h3>
        {isLogged ? (
          <div className="bg-gray-200 w-full py-2 " onClick={addProductHandler}>
            <div className="mx-3 flex flex-row items-center">
              <span className="w-1/5">
                <DownloadIcon className="w-5" />
              </span>
              Add to Cart
            </div>
          </div>
        ) : (
          <ButtonCart />
        )}
      </div>
    </div>
  );
};

export default CardProduct;
