import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Counter from "../UI/Counter";
import axios from "axios";
import { formatRupiah } from "../../hooks/useFormatIDR";
//TODO change into static type checking

export const CartItem = (props: any) => {
  //const { addItemToCart, removeItemFromCart } = //useCart();
  const {
    product_name,
    product_image,
    product_price,
    quantity,
    sub_total,
    id,
  } = props.product;
  const { state } = useContext(AuthContext);
  const subTotal = formatRupiah(sub_total * quantity);
  const price = formatRupiah(product_price);
  const handleIncrement = () => {
    const product = {
      product_id: id,
      quantity: 1,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}/carts`, product, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    //removeItemFromCart(product.id);
  };

  const handleRomoveProduct = () => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/carts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <li key={id} className="py-6 flex">
      <div className="flex-shrink-0">
        <Counter
          value={quantity}
          onDecrement={handleRemoveClick}
          onIncrement={handleIncrement}
          // disabled={outOfStock}
        />
      </div>
      <div className="flex-shrink-0 ml-1 w-24 h-24 rounded-md overflow-hidden">
        <img
          src={product_image || "/logo192.png"}
          alt={product_name}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-poppins font-medium text-gray-900">
            <h3>
              <a href={id}>{product_name}</a>
            </h3>
          </div>
          <div className="flex justify-between text-base font-poppins font-medium">
            <p className="text-gray-900">{price}</p>

            <p className="ml-4 text-mint">{subTotal}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-between text-sm">
          <p> </p>
          <div className="flex justify-self-end">
            <button
              type="button"
              className="font-medium text-cobalt hover:text-cobalt-400"
              onClick={handleRomoveProduct}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
