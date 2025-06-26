import React, { useContext } from "react";
import pizzaImage from "../../assets/food2.jpg";
import { ScrollContext } from "../../context/ScrollContext";

const Header = () => {
  const { scrollTo, menuRef } = useContext(ScrollContext);
  return (
    <div style={{ backgroundImage: `url(${pizzaImage})` }}>
      <div className="relative z-10 flex-1 p-6 sm:p-10 text-center sm:text-left text-white font-bold">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">Order your</h1>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          favorite food here
        </h1>
        <p className="text-sm sm:text-base mb-6">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>
        <button
          onClick={() => scrollTo(menuRef)}
          className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-orange-400 transition-transform duration-200 hover:scale-105"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
