import React from 'react';
import pizza from '../images/pizza.png';
import cartIcon from '../icons/cart.png';

const FoodCard = () => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-xl shadow-md space-y-4">
      <img src={pizza} alt="Pizza" className="w-full rounded-lg" />
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Pizza Margherita</h3>
        <img src={cartIcon} alt="Cart" className="w-6 h-6" />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Add to Cart</button>
    </div>
  );
};

export default FoodCard;