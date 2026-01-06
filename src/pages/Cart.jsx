import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border p-4 rounded-lg"
          >
            <div>
              <h2 className="font-medium">{item.title}</h2>
              <p className="text-sm text-gray-600">
                ${item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
								disabled={item.quantity === 1}
                className="px-3 py-1 border rounded"
              >
                −
              </button>

              <span className="min-w-[24px] text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
