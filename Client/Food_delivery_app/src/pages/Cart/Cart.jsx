import { useContext, useState, useEffect, useMemo } from "react";
import { FoodContext } from "../../context/FoodContex";
import { MinusCircle, PlusCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    addToCart,
    totalAmount,
    promoApplied,
    setPromoApplied,
    url,
  } = useContext(FoodContext);

  const [promoCode, setPromoCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(null);

  const isCartEmpty = useMemo(
    () => Object.values(cartItems).every((count) => count === 0),
    [cartItems]
  );

  const handleApplyPromo = () => {
    if (promoCode === "SAVE10") {
      setPromoApplied(true);
      toast.success("Promo code applied! 10% discount ✅");
    } else {
      setPromoApplied(false);
      setDiscountedTotal(null);
      toast.error("Invalid promo code ❌");
    }
  };

  useEffect(() => {
    const total = totalAmount();
    if (promoApplied && promoCode === "SAVE10") {
      setDiscountedTotal(total * 0.9);
    } else {
      setDiscountedTotal(null);
    }
  }, [cartItems, promoApplied]);

  const subtotal = totalAmount();
  const finalTotal =
    (promoApplied && discountedTotal != null ? discountedTotal : subtotal) + 2;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      {isCartEmpty ? (
        <p className="text-center text-gray-500 text-lg font-medium mt-10">
          🛒 Your cart is empty.
        </p>
      ) : (
        <>
          {/* Header for larger screens */}
          <div className="hidden sm:grid grid-cols-7 gap-4 bg-gray-100 p-3 rounded font-semibold text-gray-700 text-sm">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Add</p>
            <p>Remove</p>
          </div>

          <hr className="my-2 border-gray-300" />

          {/* Cart Items */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="grid grid-cols-2 sm:grid-cols-7 gap-4 items-center border-b py-4 text-sm"
                >
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <p className="sm:block hidden font-medium">{item.name}</p>
                  <p className="sm:block hidden text-green-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm sm:text-center">
                    Qty: {cartItems[item._id]}
                  </p>
                  <p className="font-bold">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(item._id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <PlusCircle size={20} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MinusCircle size={20} />
                  </button>
                </div>
              );
            }
            return null;
          })}

          {/* Cart Summary and Promo Code Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
            {/* Cart Totals */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cart Totals</h3>
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Delivery Fee</span>
                <span>+$2</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between border-b pb-2 text-green-600">
                  <span>Discount</span>
                  <span>-10%</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
              <button
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
                onClick={() => navigate("/placeorder")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* Promo Code Input */}
            <div>
              <p className="text-gray-600 mb-2">
                If you have a promo code, enter it here
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  placeholder='Try "SAVE10"'
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="px-4 py-2 w-full rounded bg-gray-100 focus:outline-none"
                />
                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
                  onClick={handleApplyPromo}
                >
                  Submit
                </button>
              </div>
              {promoApplied && (
                <p className="text-green-600 text-sm mt-2">
                  Promo code "SAVE10" applied ✅
                </p>
              )}
            </div>
          </div>
        </>
      )}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Cart;
