import Counter from "../UI/Counter";
import { useState } from "react";

//TODO change into static type checking

export const CartItem = (props: any) => {
	//const { addItemToCart, removeItemFromCart } = //useCart();
	function handleIncrement(e: any) {
		e.stopPropagation();
		//addItemToCart(product, 1);
	}
	const handleRemoveClick = (e: any) => {
		e.stopPropagation();
		//removeItemFromCart(product.id);
	};
	const product = props.product;
	return (
		<li key={product.id} className="py-6 flex">
			<div className="flex-shrink-0">
				<Counter
					value={product.quantity}
					onDecrement={handleRemoveClick}
					onIncrement={handleIncrement}
					// disabled={outOfStock}
				/>
			</div>
			<div className="flex-shrink-0 ml-1 w-24 h-24 rounded-md overflow-hidden">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-full h-full object-center object-cover"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col">
				<div>
					<div className="flex justify-between text-base font-poppins font-medium text-gray-900">
						<h3>
							<a href={product.href}>{product.name}</a>
						</h3>
					</div>
					<div className="flex justify-between text-base font-poppins font-medium">
						<p className="text-gray-900">{product.price}</p>
						{/* TODO: Change into total price */}
						<p className="ml-4 text-mint">{product.price}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">
						{product.color}
					</p>
				</div>
				<div className="flex-1 flex justify-between text-sm">
					<p> </p>
					<div className="flex justify-self-end">
						<button
							type="button"
							className="font-medium text-cobalt hover:text-cobalt-400"
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};
