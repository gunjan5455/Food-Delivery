import React, { useContext, useState } from "react";
import cartIcon from "../../assets/cart.png";
// Import ToastContainer
import { FoodContext } from "../../context/FoodContex";

const FoodCard = ({ item }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(FoodContext);

  return (
    <div
      className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden
           hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100"
    >
      <div className="relative">
        <img
          src={url + "/images/" + item.image}
          alt={item.name}
          className="h-40 w-full object-cover rounded-t-xl"
        />
        <div className="absolute top-0 left-0 bg-gradient-to-br from-black/40 to-transparent w-full h-full"></div>
        <div className="absolute bottom-1 left-2 text-white">
          <h3 className="text-md font-bold drop-shadow">{item.name}</h3>
        </div>
      </div>

      <div className="p-3 space-y-2">
        <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-green-600">${item.price}</span>
          <span className="bg-yellow-100 px-2 py-0.5 rounded-full text-yellow-800 font-semibold border border-yellow-200 text-[10px]">
            {item.category}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 mt-3">
          <button
            onClick={() => removeFromCart(item._id)}
            className="w-2/5 bg-orange-500 hover:bg-orange-400 text-white text-sm px-3 py-1 rounded-lg flex justify-center items-center gap-1"
          >
            <img src={cartIcon} alt="Remove" className="w-4 h-4" />-
          </button>
          {cartItems[item._id] > 0 && (
            <span className="text-md font-semibold text-gray-800 w-6 text-center">
              {cartItems?.[item._id] || 0}
            </span>
          )}

          <button
            onClick={() => addToCart(item._id)}
            className="w-2/5 bg-orange-500 hover:bg-orange-400 text-white text-lg px-3 py-1 rounded-lg flex justify-center items-center gap-1"
          >
            <img src={cartIcon} alt="Add" className="w-4 h-4" />+
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
