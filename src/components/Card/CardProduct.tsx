import { Link } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid";
const CardProduct = ({ product }: any) => {
  return (
    <div className="flex flex-col justify-between shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
      <img
        className="object-fill w-full h-48"
        src={product.image}
        alt="Flower and sky"
      />
      <div className="relative px-4 font-inter">
        {/* Link to product detail */}
        <Link to="/slug">
          <h3 className="font-semibold text-base md:text-xl text-gray-800">
            {product.title}
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad
            assumenda.
          </p>
        </Link>
      </div>

      <div className="p-4">
        <h3 className="py-3 font-bold text-lg">${product.price}</h3>
        <div className="bg-gray-200 w-full py-2 ">
          <div className="mx-3 flex flex-row items-center">
            <span className="w-1/5">
              <DownloadIcon className="w-5" />
            </span>
            <button className="w-3/5">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
