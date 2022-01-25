import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as IconMenu } from "../../assets/logo/IKIAE-Logo.svg";
import { TruckIcon, CubeIcon, MenuIcon } from "@heroicons/react/outline";
import { AuthContext } from "../../../context/AuthContext";

type Props = {
	children: React.ReactNode;
};
const SideBar: React.FC<Props> = ({ children }) => {
	const { state } = useContext(AuthContext);
	const { user } = state;
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const handleMobileMenu = () => {
		setIsMobile(!isMobile);
	};
	return (
		<div className="relative min-h-screen md:flex">
			<div className="bg-white text-gray-100 flex justify-between md:hidden px-6 md:px-0 py-4 md:py-0">
				<IconMenu width="10rem" />
				<button onClick={handleMobileMenu} className="p-4 ">
					<MenuIcon className="w-5 h-5 text-gray-900" />
				</button>
			</div>
			<div
				className={`${
					isMobile ? "" : "-translate-x-full"
				} bg-white text-black w-64 md:1/5 font-inter space-y-6 py-7 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
			>
				<IconMenu width="10rem" className="mx-6" />
				<nav className="mx-6  flex flex-col justify-between h-96">
					<div className="space-y-3">
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
					</div>

					<div className="font-inter">
						<h2>Logged in as </h2>
						{/* email user */}
						<h2 className="font-bold">{user?.email}</h2>
						<Link to="/">
							<button className="text-purple-700">
								Back to shop
							</button>
						</Link>
					</div>
				</nav>
			</div>

			<div className="md:w-4/5 my-8 md:my-0 px-6 md:px-8 md:py-6">
				{children}
			</div>
		</div>
	);
};

export default SideBar;
