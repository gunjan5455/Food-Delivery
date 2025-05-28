import React from "react";
import pizzaImage from "../../assets/food2.jpg";
const Header = () => {
  return (
    <div
      className="h-[75vh] w-[160vh] bg-cover bg-center flex items-end justify-center text-white text-xl m-16 mx-auto rounded-2xl"
      style={{ backgroundImage: `url(${pizzaImage})` }}
    >
      <div className="relative z-10 flex-1 p-10 text-white font-bold">
        <h1 className="text-4xl font-bold mb-2">Order your</h1>
        <h1 className="text-4xl font-bold mb-4">favourite food here</h1>
        <p className="mb-6">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-2xl hover:bg-orange-400 transition transform transition-transform duration-200 hover:scale-110">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
