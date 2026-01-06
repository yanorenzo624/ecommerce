import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <Link to="/" className="font-bold text-lg">
          ReactShop
        </Link>
        <Link to="/cart" className="text-sm">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
