//TODO change into static type checking

export const OrderSummaryProduct = (props: any) => {
	const product = props.product;
	return (
		<li key={product.id} className="flex items-start py-6 space-x-4">
			<img
				src={product.imageSrc}
				alt={product.imageAlt}
				className="flex-none w-20 h-20 rounded-md object-center object-cover"
			/>
			<div className="flex-auto space-y-1">
				<h3 className="font-bold">{product.name}</h3>
				<p className="text-gray-500">{product.color}</p>
				<p className="text-gray-500">Qty {product.quantity}</p>
			</div>
			<div className="justify-between">
				<p className="text-base font-medium">{product.price}</p>
				<br />
				{/* TODO change to total */}
				<p className="text-base font-medium text-mint">
					{product.price}
				</p>
			</div>
		</li>
	);
};
