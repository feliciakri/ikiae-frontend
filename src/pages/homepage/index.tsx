import axios from "axios";
import Layout from "../../components/Layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct";
import { AuthContext } from "../../context/AuthContext";
const Homepage: React.FC = () => {
  const { state } = useContext(AuthContext);

  const [isProducts, setIsProducts] = useState<Array<any>>();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/products`)
      .then((response) => setIsProducts(response.data));
  }, []);

  const filterProductHandler = () => {
    const filterProduct = isProducts?.filter((product: any) => {
      if (product.category_name !== "Gadget") {
        return product;
      }
    });

    setIsProducts(filterProduct);
  };

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <div className="w-1/3">
          {/* {Object.entries<unknown>(dataIcons).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
          })} */}
          <button onClick={filterProductHandler}>filter</button>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isProducts?.map((product, i) => {
              return <CardProduct key={i} product={product} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
