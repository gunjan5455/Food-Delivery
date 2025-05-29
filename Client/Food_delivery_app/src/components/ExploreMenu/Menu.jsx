import React, { useContext } from "react";
import { ScrollContext } from "../../context/ScrollContext";
import { FoodContext } from "../../context/FoodContex";

const Menu = ({ category, setCategory }) => {
  const { menuRef } = useContext(ScrollContext);
  const { food_list, url } = useContext(FoodContext);
  console.log(category);

  const uniqueCategories = food_list.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.category === item.category)
  );

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10 w-full max-w-screen-lg mx-auto">
      <h1
        ref={menuRef}
        className="text-xl sm:text-3xl font-semibold text-center"
      >
        Explore our menu
      </h1>
      <p className="text-center text-gray-500 text-sm sm:text-base">
        Craving something delicious? Explore our menu and pick your perfect
        bite!
      </p>

      {/* Scrollable Menu List */}
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {uniqueCategories.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.category ? "All" : item.category
              )
            }
            className={`relative group flex items-center gap-2 px-3 py-2 rounded-full border transform transition-transform duration-200 hover:scale-105 hover:bg-orange-100 ${
              category === item.category
                ? "bg-orange-400 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            <img
              src={url + "/images/" + item.image}
              className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover"
              alt={item.name}
            />

            <span className="capitalize font-bold text-xs sm:text-base">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      <hr className="mx-4 sm:mx-10 my-2 h-0.5 bg-black border-none" />
    </div>
  );
};

export default Menu;
