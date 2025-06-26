import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContex";
import FoodCard from "../FoodCard/FoodCard";
import { toast, ToastContainer } from "react-toastify";
//import BarLoader from "react-spinners/BarLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(FoodContext);

  return (
    <div className="px-4 sm:px-6 w-full max-w-screen-lg mx-auto">
      {loading ? (
        // <div className="h-[60vh] flex justify-center items-center">
        //   <BarLoader size={50} color="#f97316" />
        // </div>
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 sm m-10 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full max-w-xs bg-gray-200 rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <Skeleton height={160} className="w-full" />
                <div className="p-3 space-y-2">
                  <Skeleton height={14} width={`90%`} />
                  <Skeleton height={14} width={`80%`} />
                  <div className="flex justify-between items-center">
                    <Skeleton height={20} width={60} />
                    <Skeleton height={20} width={50} />
                  </div>
                  {/* <div className="flex items-center justify-between gap-2 mt-3">
                    <Skeleton height={32} width={`40%`} />
                    <Skeleton height={32} width={24} />
                    <Skeleton height={32} width={`40%`} />
                    <Skeleton height={32} width={`40%`} />
                  </div> */}
                </div>
              </div>
            ))}
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
