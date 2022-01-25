import Order from "./Order";

const orders = [
	{
		number: "WU88191111",
		href: "#",
		invoiceHref: "#",
		createdDate: "Jul 6, 2021",
		createdDatetime: "2021-07-06",
		deliveredDate: "July 12, 2021",
		deliveredDatetime: "2021-07-12",
		total: "$160.00",
		products: [
			{
				id: 1,
				name: "Micro Backpack",
				quantity: 1,
				href: "#",
				price: "$70.00",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
				imageAlt:
					"Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
			},
			// More products...
		],
	},
	{
		number: "AKSOEJWPKWID",
		href: "#",
		invoiceHref: "#",
		createdDate: "Jul 6, 2021",
		createdDatetime: "2021-07-06",
		deliveredDate: "July 12, 2021",
		deliveredDatetime: "2021-07-12",
		total: "$160.00",
		products: [
			{
				id: 1,
				name: "Micro Backpack",
				quantity: 3,
				href: "#",
				price: "$70.00",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
				imageAlt:
					"Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
			},
			{
				id: 2,
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
				id: 3,
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
		],
	},
	// More orders...
];

export default function OrderHistory() {
	return (
		<div className="bg-gray-100">
			<main className="py-24">
				<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
					<div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
						<h1 className="text-2xl font-poppins tracking-tight text-gray-900 sm:text-3xl">
							Order history
						</h1>
						<p className="mt-2 text-sm text-gray-500">
							Check the status of recent orders and buy again.
						</p>
					</div>
				</div>

				<section aria-labelledby="recent-heading" className="mt-16">
					<h2 id="recent-heading" className="sr-only">
						Recent orders
					</h2>
					<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
						<div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
							{orders.map((order) => (
								<Order order={order} />
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
