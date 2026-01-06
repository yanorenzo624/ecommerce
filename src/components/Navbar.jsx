import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <Link to="/" className="font-bold text-lg">
          ReactShop
        </Link>

        <Link to="/cart" className="text-sm">
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
