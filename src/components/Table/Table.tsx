import axios from "axios";
import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";

const Table: React.FC = () => {
  const [isProduct, setIsProduct] = useState<Array<any>>([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}`)
      .then((product) => setIsProduct(product.data));
  }, []);

  return (
    <div className="min-h-screen py-5 font-inter">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto w-full rounded-lg bg-white overflow-hidden">
          <thead className="bg-gray-300">
            <tr className="text-black text-left">
              <th className="font-semibold text-sm px-6 py-4">Image</th>
              <th className="font-semibold text-sm px-6 py-4">Name</th>
              <th className="font-semibold text-sm px-6 py-4 text-center">
                Category
              </th>
              <th className="font-semibold text-sm text-center">Price</th>
              <th className="font-semibold text-sm px-6 py-4 text-center">
                Quantity
              </th>
              <th className="font-semibold text-sm px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isProduct.map((product: any, i: number) => (
              <TableBody
                key={i}
                id={product.id}
                image={product.image}
                name={product.title}
                category={product.category}
                quantity={product.price}
                price={product.price}
                // Hardcode delete product to change
                isProduct={isProduct}
                setIsProduct={setIsProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
