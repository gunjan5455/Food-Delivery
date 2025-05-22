// import { useContext, useState, useEffect } from "react";
// import { FoodContext } from "../../context/FoodContex";
// import { MinusCircle, PlusCircle } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const {
//     cartItems,
//     food_list,
//     removeFromCart,
//     addToCart,
//     totalAmount,
//     promoCodeAppllied,
//   } = useContext(FoodContext);

//   const [promoCode, setPromoCode] = useState("");
//   const [discountedTotal, setDiscountedTotal] = useState(null);
//   const [promoApplied, setPromoApplied] = useState(false);

//   const isCartEmpty = Object.values(cartItems).every((count) => count === 0);

//   const handleApplyPromo = () => {
//     if (promoCode === "SAVE10") {
//       const discounted = totalAmount(promoCode);
//       setDiscountedTotal(discounted);
//       // setPromoApplied(true);
//       toast.success("Promo code applied! 10% discount ✅");
//     } else {
//       setDiscountedTotal(null);
//       // setPromoApplied(false);
//       toast.error("Invalid promo code ❌");
//     }
//   };
//   useEffect(() => {
//     if (promoCodeAppllied && promoCode === "SAVE10") {
//       const discount = totalAmount() * 0.1;
//       setDiscountedTotal(totalAmount() - discount);
//     }
//   }, [cartItems]);
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

//       {isCartEmpty ? (
//         <p className="text-center text-gray-500 text-lg font-medium mt-10">
//           🛒 Your cart is empty.
//         </p>
//       ) : (
//         <>
//           {/* Table Header */}
//           <div className="grid grid-cols-7 gap-4 bg-gray-100 p-3 rounded font-semibold text-gray-700">
//             <p>Item</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Add</p>
//             <p>Remove</p>
//           </div>

//           <hr className="my-2 border-gray-300" />

//           {/* Cart Items */}
//           {food_list.map((item) => {
//             if (cartItems[item.id] > 0) {
//               return (
//                 <div
//                   key={item.id}
//                   className="grid grid-cols-7 gap-4 items-center border-b py-4"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <p className="text-sm font-medium">{item.name}</p>
//                   <p className="text-sm text-green-600 font-semibold">
//                     ${item.price.toFixed(2)}
//                   </p>
//                   <p className="text-sm">{cartItems[item.id]}</p>
//                   <p className="text-sm font-bold">
//                     ${(item.price * cartItems[item.id]).toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => addToCart(item.id)}
//                     className="text-green-500 hover:text-green-700"
//                   >
//                     <PlusCircle size={22} />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <MinusCircle size={22} />
//                   </button>
//                 </div>
//               );
//             }
//             return null;
//           })}

//           {/* Cart Summary + Promo Code */}
//           <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
//             {/* Cart Totals */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold">Cart Totals</h3>
//               <div className="flex justify-between border-b pb-2">
//                 <span>Subtotal</span>
//                 <span>${totalAmount().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between border-b pb-2">
//                 <span>Delivery Fee</span>
//                 <span>+$2</span>
//               </div>

//               {promoCodeAppllied && (
//                 <div className="flex justify-between border-b pb-2 text-green-600">
//                   <span>Discount</span>
//                   <span>-10%</span>
//                 </div>
//               )}

//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>
//                   $
//                   {(promoApplied
//                     ? discountedTotal + 2
//                     : totalAmount() + 2
//                   ).toFixed(2)}
//                 </span>
//               </div>

//               <button
//                 className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
//                 onClick={() => navigate("/placeorder")}
//               >
//                 PROCEED TO CHECKOUT
//               </button>
//             </div>

//             {/* Promo Code */}
//             <div>
//               <p className="text-gray-600 mb-2">
//                 If you have a promo code, enter it here
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={promoCode}
//                   onChange={(e) => setPromoCode(e.target.value)}
//                   className="px-4 py-2 w-full rounded bg-gray-100 focus:outline-none"
//                 />
//                 <button
//                   className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//                   onClick={() => {
//                     handleApplyPromo();
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//       <ToastContainer position="top-center" />
//     </div>
//   );
// };

// export default Cart;

// import { useContext, useState, useEffect } from "react";
// import { FoodContext } from "../../context/FoodContex";
// import { MinusCircle, PlusCircle } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// const Cart = () => {
//   const navigate = useNavigate();
//   const {
//     cartItems,
//     food_list,
//     removeFromCart,
//     addToCart,
//     totalAmount,
//     promoApplied,
//     setPromoApplied,
//   } = useContext(FoodContext);

//   const [promoCode, setPromoCode] = useState("");
//   const [discountedTotal, setDiscountedTotal] = useState(null);

//   const isCartEmpty = Object.values(cartItems).every((count) => count === 0);

//   const handleApplyPromo = () => {
//     if (promoCode === "SAVE10") {
//       const discounted = totalAmount(promoCode);
//       setDiscountedTotal(discounted);
//       setPromoApplied(true);
//       toast.success("Promo code applied! 10% discount ✅");
//     } else {
//       setDiscountedTotal(null);
//       setPromoApplied(false);
//       toast.error("Invalid promo code ❌");
//     }
//   };
//   useEffect(() => {
//     if (promoApplied && promoCode === "SAVE10") {
//       const discount = totalAmount() * 0.1;
//       setDiscountedTotal(totalAmount() - discount);
//     }
//   }, [cartItems]);
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

//       {isCartEmpty ? (
//         <p className="text-center text-gray-500 text-lg font-medium mt-10">
//           🛒 Your cart is empty.
//         </p>
//       ) : (
//         <>
//           {/* Table Header */}
//           <div className="grid grid-cols-7 gap-4 bg-gray-100 p-3 rounded font-semibold text-gray-700">
//             <p>Item</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Add</p>
//             <p>Remove</p>
//           </div>

//           <hr className="my-2 border-gray-300" />

//           {/* Cart Items */}
//           {food_list.map((item) => {
//             if (cartItems[item.id] > 0) {
//               return (
//                 <div
//                   key={item.id}
//                   className="grid grid-cols-7 gap-4 items-center border-b py-4"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <p className="text-sm font-medium">{item.name}</p>
//                   <p className="text-sm text-green-600 font-semibold">
//                     ${item.price.toFixed(2)}
//                   </p>
//                   <p className="text-sm">{cartItems[item.id]}</p>
//                   <p className="text-sm font-bold">
//                     ${(item.price * cartItems[item.id]).toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => addToCart(item.id)}
//                     className="text-green-500 hover:text-green-700"
//                   >
//                     <PlusCircle size={22} />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <MinusCircle size={22} />
//                   </button>
//                 </div>
//               );
//             }
//             return null;
//           })}

//           {/* Cart Summary + Promo Code */}
//           <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
//             {/* Cart Totals */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold">Cart Totals</h3>
//               <div className="flex justify-between border-b pb-2">
//                 <span>Subtotal</span>
//                 <span>${totalAmount().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between border-b pb-2">
//                 <span>Delivery Fee</span>
//                 <span>+$2</span>
//               </div>

//               {promoApplied && (
//                 <div className="flex justify-between border-b pb-2 text-green-600">
//                   <span>Discount</span>
//                   <span>-10%</span>
//                 </div>
//               )}

//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>
//                   $
//                   {(promoApplied
//                     ? discountedTotal + 2
//                     : totalAmount() + 2
//                   ).toFixed(2)}
//                 </span>
//               </div>

//               <button
//                 className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
//                 onClick={() => navigate("/placeorder")}
//               >
//                 PROCEED TO CHECKOUT
//               </button>
//             </div>

//             {/* Promo Code */}
//             <div>
//               <p className="text-gray-600 mb-2">
//                 If you have a promo code, enter it here
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={promoCode}
//                   onChange={(e) => setPromoCode(e.target.value)}
//                   className="px-4 py-2 w-full rounded bg-gray-100 focus:outline-none"
//                 />
//                 <button
//                   className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//                   onClick={handleApplyPromo}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//       <ToastContainer position="top-center" />
//     </div>
//   );
// };

// export default Cart;

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
  } = useContext(FoodContext);

  const [promoCode, setPromoCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(null);

  const isCartEmpty = useMemo(
    () => Object.values(cartItems).every((count) => count === 0),
    [cartItems]
  );

  // Apply promo code
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

  // Update discounted total whenever cart or promo changes
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
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      {isCartEmpty ? (
        <p className="text-center text-gray-500 text-lg font-medium mt-10">
          🛒 Your cart is empty.
        </p>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 bg-gray-100 p-3 rounded font-semibold text-gray-700">
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
            if (cartItems[item.id] > 0) {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-7 gap-4 items-center border-b py-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-green-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm">{cartItems[item.id]}</p>
                  <p className="text-sm font-bold">
                    ${(item.price * cartItems[item.id]).toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <PlusCircle size={22} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MinusCircle size={22} />
                  </button>
                </div>
              );
            }
            return null;
          })}

          {/* Cart Summary + Promo Code */}
          <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
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
                <span>${finalTotal.toFixed(2) + 2}</span>
              </div>

              <button
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
                onClick={() => navigate("/placeorder")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* Promo Code */}
            <div>
              <p className="text-gray-600 mb-2">
                If you have a promo code, enter it here
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="px-4 py-2 w-full rounded bg-gray-100 focus:outline-none"
                />
                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
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
