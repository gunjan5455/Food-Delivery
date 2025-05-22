// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { FoodContext } from "../../context/FoodContex";

// const PlaceOrder = () => {
//   const { totalAmount, promoCodeAppllied } = useContext(FoodContext);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add form validation & order logic here
//     navigate("/checkout"); // Make sure "/checkout" exists or change route
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* Delivery Info Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="street"
//           placeholder="Street Address"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="zipcode"
//           placeholder="Zip Code"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           className="w-full border px-4 py-2 rounded"
//         />

//         <button
//           type="submit"
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
//         >
//           Proceed to Checkout
//         </button>
//       </form>

//       {/* Cart Summary */}
//       <div className="space-y-4 bg-zinc-100 p-6 rounded">
//         <h3 className="text-xl font-semibold">Cart Totals</h3>
//         <div className="flex justify-between border-b pb-2">
//           <span>Subtotal</span>
//           <span>${totalAmount().toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between border-b pb-2">
//           <span>Delivery Fee</span>
//           <span>+$2.00</span>
//         </div>

//         {promoCodeAppllied && (
//           <div className="flex justify-between border-b pb-2 text-green-600">
//             <span>Discount</span>
//             <span>-10%</span>
//           </div>
//         )}

//         <div className="flex justify-between font-bold text-lg">
//           <span>Total</span>
//           <span>
//             ${(totalAmount() === 0 ? 0 : totalAmount() + 2).toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContex"; // Make sure file is named correctly

const PlaceOrder = () => {
  const { totalAmount, promoApplied } = useContext(FoodContext);
  const navigate = useNavigate();

  const subtotal = totalAmount();
  const discountedTotal = promoApplied ? subtotal * 0.9 : subtotal;
  const finalTotal = subtotal === 0 ? 0 : discountedTotal + 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form validation or actual order placement logic
    navigate("/checkout"); // Ensure this route is defined in your router
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Delivery Info Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
        >
          Proceed to Payment
        </button>
      </form>

      {/* Cart Summary */}
      <div className="space-y-4 bg-zinc-100 p-6 rounded">
        <h3 className="text-xl font-semibold">Cart Totals</h3>

        <div className="flex justify-between border-b pb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Delivery Fee</span>
          <span>+$2.00</span>
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
      </div>
    </div>
  );
};

export default PlaceOrder;
