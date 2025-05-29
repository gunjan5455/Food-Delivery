import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContex";
import FoodCard from "../FoodCard/FoodCard";
import { toast, ToastContainer } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";
const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(FoodContext);

  return (
    <div className="px-4">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <BarLoader size={50} color="#f97316" />
        </div>
      ) : (
        <>
          <h1 className="flex justify-center m-6 text-2xl font-bold mb-4">
            Dishes near you
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
