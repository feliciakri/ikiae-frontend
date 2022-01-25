import axios from "axios";
import Layout from "../../components/Layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct";
import { AuthContext } from "../../context/AuthContext";

const Homepage: React.FC = () => {
	const [isProducts, setIsProducts] = useState<Array<any>>();
	const [isCategories, setIsCategories] = useState<Array<any>>();

	// Filtered Category
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_KEY}/products`)
			.then((response) => setIsProducts(response.data));
		axios
			.get(`${process.env.REACT_APP_API_KEY}/categories`)
			.then((response) => setIsCategories(response.data));
	}, []);

	const [filteredSearchProducts, setFilteredSearchProducts] = useState<any>(
		[]
	);
	const [search, setSearch] = useState("");
	useEffect(() => {
		setFilteredSearchProducts(
			isProducts?.filter((product) =>
				product.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, isProducts]);

	//const [categoryFilter, setCategoryFilter] = useState("");

	// useEffect(() => {
	// 	setFilteredCategoryProducts(
	// 		isProducts?.filter((product) =>
	// 			product.category_id.includes(categoryFilter.toLowerCase())
	// 		)
	// 	);
	// }, [categoryFilter, isProducts]);

	const filterCategory = (curcat: any) => {
		const id = curcat.id;
		const newProducts = isProducts?.filter((newVal) => {
			return newVal.category_id === id;
		});
		setFilteredSearchProducts(newProducts);
	};

	const allCategory = () => {
		setFilteredSearchProducts(isProducts);
	};

	return (
		<Layout onSearch={setSearch}>
			<div className="flex flex-col sm:flex-row">
				<div className="md:w-1/3 ">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 px-5 gap-5 mb-2">
						<button
							className="bg-white py-2 px-1 flex flex-col items-center"
							value={""}
							onClick={() => allCategory()}
						>
							<p>All</p>
						</button>
					</div>

					<div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-5 gap-5 mb-16">
						{isCategories?.map((category, i) => (
							<button
								className="bg-white py-2 px-1 flex flex-col items-center justify-between"
								value={category.category_id}
								key={i}
								onClick={() => filterCategory(category)}
							>
								<img src={category.image} alt={category.name} />
								<p>{category.name}</p>
							</button>
						))}
					</div>
				</div>

				<div className="md:w-2/3">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredSearchProducts?.map(
							(product: any, i: number) => {
								return (
									<CardProduct key={i} product={product} />
								);
							}
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
