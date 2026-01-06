import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-xl p-4 flex flex-col hover:shadow-md transition bg-white"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      <h2 className="text-sm font-medium mb-2 line-clamp-2">
        {product.title}
      </h2>

      <div className="mt-auto flex items-center justify-between">
        <p className="font-semibold">${product.price}</p>
        <span className="text-xs text-blue-600">View</span>
      </div>
    </Link>
  );
};

export default ProductCard;
