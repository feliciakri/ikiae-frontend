import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconMenu } from "../../assets/logo/IKIAE-Logo.svg";
import { TruckIcon, CubeIcon } from "@heroicons/react/outline";

type Props = {
  children: React.ReactNode;
};
const SideBar: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-white text-gray-100 flex justify-between md:hidden px-6 md:px-0 py-4 md:py-0">
        <IconMenu width="10rem" />
        <button
          onClick={handleMobileMenu}
          className="p-4 focus:outline-none focus:bg-gray-700"
        ></button>
      </div>
      <div
        className={`${
          isMobile ? "" : "-translate-x-full"
        } bg-white text-black w-64 md:1/5 font-inter space-y-6 py-7 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <IconMenu width="10rem" className="mx-6" />
        <nav className="mx-6 space-y-3">
          <NavLink
            to="/dashboard/product"
            className={({ isActive }) =>
              (isActive ? "bg-gray-700 text-white" : "") +
              " flex items-center space-x-2 py-2.5  px-2 rounded-full transition duration-200 hover:bg-gray-700 hover:text-white"
            }
          >
            <CubeIcon className="w-5 h-5" />
            <h2>Product</h2>
          </NavLink>
          <NavLink
            to="/dashboard/order"
            className="flex items-center space-x-2 py-2.5  px-2 rounded-full transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <TruckIcon className="w-5 h-5" />
            <h2>Order</h2>
          </NavLink>
        </nav>
      </div>

      <div className="md:w-4/5 my-8 md:my-0 px-6 md:px-8 md:py-6">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
