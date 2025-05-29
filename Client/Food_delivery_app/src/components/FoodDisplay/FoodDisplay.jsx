import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContex";
import FoodCard from "../FoodCard/FoodCard";
import { toast, ToastContainer } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";

const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(FoodContext);

  return (
    <div className="px-4 sm:px-6 w-full max-w-screen-lg mx-auto">
      {loading ? (
        <div className="h-[60vh] flex justify-center items-center">
          <BarLoader size={50} color="#f97316" />
        </div>
      ) : (
        <>
          <h1 className="flex justify-center m-4 text-xl sm:text-2xl font-bold">
            Dishes near you
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {food_list.map((item, index) => {
              if (category === "All" || category === item.category) {
                return <FoodCard key={index} item={item} />;
              }
            })}
          </div>
        </>
      )}

      <ToastContainer position="top-center" />
    </div>
  );
};

export default FoodDisplay;
