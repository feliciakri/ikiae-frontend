import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { CartItem } from "./CartItem";

const products = [
	{
		id: 1,
		name: "Throwback Hip Bag",
		href: "#",
		color: "Salmon",
		price: "$90.00",
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: "$32.00",
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
	},
	// More products...
];

export default function CartSidebar() {
	const [open, setOpen] = useState(false);
	function handleCheckout() {
		//router.push(ROUTES.CHECKOUT);
		setOpen(false);
	}
	const totalPrice = "$2000";
	return (
		<>
			<div>
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
				>
					<ShoppingCartIcon className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
				</button>
			</div>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-40 inset-0 overflow-hidden"
					onClose={setOpen}
				>
					<div className="absolute inset-0 overflow-hidden">
						<Transition.Child
							as={Fragment}
							enter="ease-in-out duration-500"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in-out duration-500"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<div className="w-screen max-w-md">
									<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
										<div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="font-poppins font-medium text-2xl text-gray-900">
													Shopping Cart
												</Dialog.Title>
												<div className="ml-3 h-7 flex items-center">
													<button
														type="button"
														className="-m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={() =>
															setOpen(false)
														}
													>
														<span className="sr-only">
															Close panel
														</span>
														<XIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul className="-my-6 divide-y divide-gray-200">
														{products.map(
															(product) => (
																<CartItem
																	product={
																		product
																	}
																	id={
																		product.id
																	}
																/>
															)
														)}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Total Items</p>
												<p>2</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">
												Shipping and taxes calculated at
												checkout.
											</p>
											<button
												className="flex justify-between w-full h-10 mt-6 md:h-14 p-1 text-sm font-bold bg-bermuda rounded-full shadow-700 transition-colors focus:outline-none hover:bg-bermuda-600 focus:bg-bermuda-600"
												onClick={handleCheckout}
											>
												<span className="flex flex-1 items-center h-full px-5 text-white">
													Checkout
												</span>
												<span className="flex items-center flex-shrink-0 h-full bg-white text-bermuda rounded-full px-5">
													{totalPrice}
												</span>
											</button>
											<div className="mt-6 flex justify-center text-sm text-center text-gray-500">
												<p>
													or{" "}
													<button
														type="button"
														className="text-cobalt font-medium hover:text-cobalt-400"
														onClick={() =>
															setOpen(false)
														}
													>
														Continue Shopping
														<span aria-hidden="true">
															{" "}
															&rarr;
														</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
