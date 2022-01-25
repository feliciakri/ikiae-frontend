import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Order from "./Order";

export default function OrderHistory() {
	const { state } = useContext(AuthContext);
	console.log(state.token);
	console.log(localStorage.getItem("token"));
	const token = state.token;
	const [isOrders, setIsOrders] = useState<Array<any>>();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_KEY}/orders`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${
						token || localStorage.getItem("token")
					}`,
				},
			})
			.then((res) => {
				console.log(res);
				setIsOrders(res.data);
			});
	}, [token]);

	console.log(isOrders);

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
							{isOrders?.map((orde, i) => (
								<Order key={i} order={orde} />
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
