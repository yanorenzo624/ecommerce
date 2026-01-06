import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg p-4 hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-4"
      />
      <h2 className="text-sm font-medium line-clamp-2">
        {product.title}
      </h2>
      <p className="mt-2 font-semibold">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
