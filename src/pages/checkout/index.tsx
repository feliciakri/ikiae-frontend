import { OrderSummaryProduct } from "../../components/Checkout/OrderSummaryProduct";
import { OrderSummaryInfo } from "../../components/Checkout/OrderSummaryInfo";
import { Link, NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

type Inputs = {
  address: string;
  apartment: string;
  city: string;
  province: string;
  postCode: number;
  nameCard: string;
  CardNumber: string;
  expiredDate: number;
  CVC: number;
};

const Checkout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { state } = useContext(AuthContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const address = {
      street: 1,
      city: data.city,
      state: data.province,
      zip: data.postCode,
    };
    const credit_card = {
      type: data.apartment,
      name: data.nameCard,
      number: data.CardNumber,
      cvv: data.CVC,
      month: 1,
      year: 2012,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/orders`,
        {
          address: {
            address,
          },
          credit_card: {
            credit_card,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const [isCartProduct, setIsCartProduct] = useState<Array<any>>();
  useEffect(() => {
    if (state.token) {
      axios
        .get(`${process.env.REACT_APP_API_KEY}/carts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then((response) => {
          setIsCartProduct(response.data);
        });
    }
    axios
      .get(`${process.env.REACT_APP_API_KEY}/carts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((response) => {
        setIsCartProduct(response.data);
      });
  }, [state.token]);

  const totalPrice = isCartProduct
    ?.map((product) => product.quantity * product.sub_total)
    .reduce((a, b) => a + b);

  const subTotal = isCartProduct
    ?.map((product) => product.sub_total)
    .reduce((a, b) => a + b);

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2
              id="summary-heading"
              className="text-lg font-poppins font-medium text-gray-900"
            >
              Order summary
            </h2>
            <ul className="text-sm font-medium text-gray-900 divide-y divide-gray-200">
              {isCartProduct?.map((product, i) => (
                <OrderSummaryProduct key={i} product={product} />
              ))}
            </ul>
            <OrderSummaryInfo
              subtotal={subTotal || 0}
              shipping={"$20.00"}
              total={totalPrice || 0}
            />
          </div>
        </section>

        <form
          className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                id="shipping-heading"
                className="text-lg font-medium font-poppins text-gray-900"
              >
                Shipping Information
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("apartment", {
                        required: true,
                      })}
                      type="text"
                      id="apartment"
                      name="apartment"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="city"
                      name="city"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="province"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Province
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("province", { required: true })}
                      type="text"
                      id="province"
                      name="province"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("postCode", { required: true })}
                      type="number"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2
                id="payment-heading"
                className="text-lg font-poppins font-medium text-gray-900"
              >
                Payment Information
              </h2>

              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("nameCard", { required: true })}
                      type="text"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("CardNumber", { required: true })}
                      type="text"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("expiredDate", { required: true })}
                      type="text"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("CVC", { required: true })}
                      type="number"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              {isCartProduct ? (
                <>
                  <button
                    type="submit"
                    className="w-full bg-cobalt border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-cobalt-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
                  >
                    Place order
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                    You won't be charged until the next step.
                  </p>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    type="submit"
                    className="w-full bg-cobalt border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-cobalt-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
                  >
                    You must to buy something...
                  </NavLink>
                  <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                    You won't be charged until the next step.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    className="text-cobalt font-medium hover:text-cobalt-400"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
