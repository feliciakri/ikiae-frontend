import axios from "axios";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
// import dataIcons from "../../components/assets/icons/icons";
import CardProduct from "../../components/Card/CardProduct";
const Homepage: React.FC = () => {
  const [isProducts, setIsProducts] = useState<Array<any>>();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}`)
      .then((response) => setIsProducts(response.data));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <div className="w-1/3">
          {/* {Object.entries<unknown>(dataIcons).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
          })} */}
        </div>
        <div className="w-2/3">
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
