import axios from "axios";
import Layout from "../../components/Layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct";
import { AuthContext } from "../../context/AuthContext";

const Homepage: React.FC = () => {
  const [isProducts, setIsProducts] = useState<Array<any>>();
  const [isCategories, setIsCategories] = useState<Array<any>>();

  // Filtered Category
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/products`)
      .then((response) => setIsProducts(response.data));
    axios
      .get(`${process.env.REACT_APP_API_KEY}/categories`)
      .then((response) => setIsCategories(response.data));
  }, []);

  const getFiltered: any = () => {
    const productList = isProducts;
    return productList;
  };

  const filteredProducts = (props: any) => {
    let fiteredProduct = getFiltered()?.filter(
      (product: any) => product.id === props
    );

    return fiteredProduct;
  };

  const [filteredProduct, setFilteredProduct] = useState(null);
  useEffect(() => {
    setFilteredProduct(getFiltered());
  }, []);

  const handleProduct = (e: any) => {
    let typeProduct = e.target.value;

    typeProduct !== "all"
      ? setFilteredProduct(filteredProducts(typeProduct))
      : setFilteredProduct(getFiltered);
  };

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <div className="md:w-1/3 ">
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-5 gap-5 mb-16">
            {isCategories?.map((product, i) => (
              <button
                className="bg-white py-2 px-1 flex flex-col items-center justify-between"
                onClick={handleProduct}
                value={product.category_id}
                key={i}
              >
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </button>
            ))}
          </div>
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
