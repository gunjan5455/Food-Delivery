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
    <div className="flex flex-col gap-6 px-4 w-4/5 ml-36">
      <h1 ref={menuRef} className="text-2xl font-semibold text-center">
        Explore our menu
      </h1>
      <p className="text-center text-gray-500">
        Craving something delicious? Explore our menu and pick your perfect
        bite!
      </p>

      {/* Scrollable Menu List */}
      {/* <div className="flex flex-wrap gap-3 justify-center mt-4">
        {uniqueCategories.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.category ? "All" : item.category
              )
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transform transition-transform duration-200 hover:scale-110 hover:bg-orange-100 ${
              category === item.category
                ? "bg-orange-400 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            <img
              src={url + "/images/" + item.image}
              className="w-8 h-8 rounded-full object-cover"
              alt={item.name}
            />
            <div
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                  bg-black text-white text-xs rounded py-1 px-2 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10"
            >
              Your tooltip message
            </div>
            <span className="capitalize">{item.category}</span>
          </button>
        ))}
      </div> */}

      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {uniqueCategories.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.category ? "All" : item.category
              )
            }
            className={`relative group flex items-center gap-2 px-4 py-2 rounded-full border transform transition-transform duration-200 hover:scale-110 hover:bg-orange-100 ${
              category === item.category
                ? "bg-orange-400 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            <img
              src={url + "/images/" + item.image}
              className="w-8 h-8 rounded-full object-cover"
              alt={item.name}
            />

            {/* Tooltip */}
            {/* <div
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
        bg-black text-white text-xs rounded py-1 px-2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
        whitespace-nowrap z-10 pointer-events-none"
            >
              description:{item.description}
            </div> */}

            <span className="capitalize font-bold">{item.category}</span>
          </button>
        ))}
      </div>

      <hr className="mx-10 my-0 h-0.5 bg-black border-none" />
    </div>
  );
};

export default Menu;
