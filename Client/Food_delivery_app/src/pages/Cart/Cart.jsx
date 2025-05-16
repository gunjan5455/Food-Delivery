// import { useContext } from "react";

// import { FoodContext } from "../../context/FoodContex";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart } = useContext(FoodContext);
//   return (
//     <div>
//       <div>
//         <div>
//           <p>Item</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr className="mx-20 my-0 h-0.5 bg-gray-300 border-none" />
//         {food_list.map((item, index) => {
//           if (cartItems[item.id] > 0) {
//             return (
//               <div>
//                 <img src={item.img} alt="" />
//                 <p>{item.name}</p>
//                 <p>{cartItems[item.id]}</p>
//                 <p>{item.price * cartItems[item.id]}</p>
//                 <p onClick={() => removeFromCart(item.id)}>X</p>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };
// export default Cart;

import { useContext } from "react";
import { FoodContext } from "../../context/FoodContex";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart } =
    useContext(FoodContext);

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((count) => count === 0);

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
            <p>Add </p>
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
                    className="text-green-500 font-bold hover:text-green-700"
                  >
                    ✕
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-bold hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              );
            }
            return null;
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
