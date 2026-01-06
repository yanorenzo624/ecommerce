import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch products");
				return res.json();
			})
			.then((data) => setProducts(data))
			.catch(() => setError("Something went wrong"))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <Loader />;
	if (error)
		return (
			<p className="text-center mt-10 text-red-600">
				{error}
			</p>
		);

	return (
		<div className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-2xl font-bold mb-6">Products</h1>
			<input
				type="text"
				placeholder="Search products..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring"
			/>

			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
				{products
					.filter((product) =>
						product.title.toLowerCase().includes(search.toLowerCase())
					)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default Home;
