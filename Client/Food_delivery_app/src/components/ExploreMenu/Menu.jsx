import React from "react";
import { menuList } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div className="flex flex-col gap-6 px-4 w-4/5 ml-36">
      <h1 className="text-2xl font-semibold text-center">Explore our menu</h1>
      <p className="text-center text-gray-500">
        Craving something delicious? Explore our menu and pick your perfect
        bite!
      </p>

      {/* Scrollable Menu List */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 w-max px-4">
          {menuList.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 text-center"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`h-32 w-32 rounded-full object-cover mx-auto ${
                  category === item.menu_name
                    ? "border-4 border-solid border-orange-500 p-[2px]"
                    : ""
                }`}
              />
              <p className="mt-2 font-medium">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-10 my-0 h-0.5 bg-black border-none" />
    </div>
  );
};

export default Menu;
