import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/outline";
import axios from "axios";
import ModalAuth from "../UI/Modal/ModalAuth/ModalAuth";

interface ProductBody {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  isProduct: Array<any>;
  setIsProduct: (active: Array<any>) => void;
}
const TableBody: React.FC<ProductBody> = ({
  id,
  image,
  name,
  category,
  price,
  quantity,
  isProduct,
  setIsProduct,
}) => {
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const handlerDeleteProduct = () => {
    //   Example delete product
    let newProduct = isProduct.filter((product) => {
      return product.id !== id;
    });
    setIsProduct(newProduct);
    setIsSucces(true);
    setTimeout(() => {
      setIsSucces(false);
    }, 1000);

    // delete product with backend
    // axios
    //   .delete(`${process.env.RREACT_APP_API_KEY_DELETE}`, {
    //     data: {
    //       id,
    //     },
    //   })
    //   .catch((err) => alert("error!"));
  };
  return (
    <Fragment>
      <ModalAuth isShow={isSucces} onClose={setIsSucces}>
        <h1 className="bg-white rounded-lg p-10">Delete Succes!</h1>
      </ModalAuth>
      <tr>
        <td className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="inline-flex w-10 h-10">
              <img
                className="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                src={image}
              />
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <p> {name} </p>
        </td>
        <td className="px-6 py-4 text-center">
          <p>{category}</p>
        </td>
        <td className="px-6 py-4 text-center">
          <p> ${price}</p>
        </td>
        <td className="px-6 py-4 text-center">
          <p>{quantity}</p>
        </td>
        <td className="px-2 flex justify-center items-center py-4">
          <button className="px-2 py-4 text-center">
            <TrashIcon className="w-5 h-5" onClick={handlerDeleteProduct} />
          </button>
          <Link to="/dashboard/edit" className="hover:underline">
            <PencilAltIcon className="w-5 h-5" />
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

export default TableBody;
