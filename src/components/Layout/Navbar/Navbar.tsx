import React, { Fragment, useContext, useEffect, useState } from "react";
import { ReactComponent as IconMenu } from "../../assets/logo/IKIAE-Logo.svg";
import ButtonSignIn from "../../UI/Button/ButtonSignIn";
import ProfileDropdown from "../../UI/Dropdown/ProfileDropdown";
import ModalLogin from "../../UI/Modal/ModalAuth/ModalLogin";
import ModalRegister from "../../UI/Modal/ModalAuth/ModalRegister";
import CartSidebar from "../../Cart/CartSidebar";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";


const Navbar = () => {
  const { state } = useContext(AuthContext);
  const { isLogged } = state;
  const [isCart, setIsCart] = useState<Array<any>>();
  const [showModalLog, setShowModalLog] = useState<boolean>(false);
  const [showModalReg, setShowModalReg] = useState<boolean>(false);
        
          // let total = isCarts?.reduce((res, item): any => {
  //   return res + item.price * item.quantity;
  // }, 0);
  // console.log(total);

   useEffect(() => {
    if (isLogged) {
      axios
        .get(`${process.env.REACT_APP_API_KEY}/carts`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then((res) => {
          setIsCart(res.data || []);
        });
    }
  }, [isLogged, state.token]);

	const user = {
		name: "Tom Cook",
		email: "tom@example.com",
	};

	const isLoggedIn = false;

	return (
		<Fragment>
			<ModalLogin
				showModalLog={showModalLog}
				setShowModalLog={setShowModalLog}
				setShowModalReg={setShowModalReg}
			/>
			<ModalRegister
				showModalReg={showModalReg}
				setShowModalLog={setShowModalLog}
				setShowModalReg={setShowModalReg}
			/>
			<Disclosure as="header" className="bg-white shadow">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
							<div className="relative h-16 flex justify-between">
								<div className="relative z-10 px-2 flex lg:px-0">
									<div className="flex-shrink-0 flex items-center">
										<span className="w-1/3">
											<IconMenu width="10rem" />
										</span>
									</div>
								</div>
								<div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
									<div className="w-full sm:max-w-xs">
										<label
											htmlFor="search"
											className="sr-only"
										>
											Search
										</label>
										<div className="relative">
											<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
												<SearchIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</div>
											<input
												id="search"
												name="search"
												className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												placeholder="Search"
												type="search"
											/>
										</div>
									</div>
								</div>
								<div className="relative z-10 flex items-center lg:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">
											Open menu
										</span>
										{open ? (
											<XIcon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										) : (
											<MenuIcon
												className="block h-6 w-6"
												aria-hidden="true"
											/>
										)}
									</Disclosure.Button>
								</div>
								<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
									{/* Profile dropdown */}

									{isLoggedIn && (
										<ProfileDropdown user={user} />
									)}
									{!isLoggedIn && (
										<ButtonSignIn
											isModal={() =>
												setShowModalLog(true)
											}
										/>
									)}
									<span className="border border-gray-100 h-full"></span>
									<div className="flex flex-rol items-center space-x-2 md:space-x-3">
										<CartSidebar />
										<span>0</span>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel
							as="nav"
							className="lg:hidden"
							aria-label="Global"
						>
							<div className="border-t border-gray-200 pt-4 pb-3">
								<div className="px-4 flex items-center">
									<div className="flex justify-evenly w-full">
										<div>
											{isLoggedIn && (
												<div>
													<div className="text-base font-medium text-gray-800">
														Signed in as
													</div>
													<div className="text-sm font-medium text-gray-500">
														{user.email}
													</div>
												</div>
											)}
											{!isLoggedIn && (
												<ButtonSignIn
													isModal={() =>
														setShowModalLog(true)
													}
												/>
											)}
										</div>

										<button
											type="button"
											className="mr-4 ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<div className="h-6 w-6">
												<CartSidebar />
											</div>
										</button>
									</div>
								</div>
								<div className="mt-3 px-2 space-y-1">
									<a
										href="/orders"
										className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
									>
										My Orders
									</a>
									<a
										href="/sell"
										className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
									>
										Sell
									</a>
									<a
										href="/logout"
										className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
									>
										Logout
									</a>
								</div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</Fragment>
	);
