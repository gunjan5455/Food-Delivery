// import React from "react";
// import { useContext } from "react";
// import { FoodContext } from "../../context/FoodContex";
// import FoodCard from "../FoodCard/FoodCard";

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(FoodContext);
//   return (
//     <div>
//       <h1>Dishes near you</h1>
//       <div>
//         {food_list.map((item, index) => {
//           return (
//             <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               <FoodCard key={index} item={item} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
// key={index} id={item.id} name={item.name} description ={item.description} price = {item.price} image ={item.img} category={item.category}

import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContex";
import FoodCard from "../FoodCard/FoodCard";
import { toast, ToastContainer } from "react-toastify";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(FoodContext);

  return (
    <div className="px-4">
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
      <ToastContainer />
    </div>
  );
};

export default FoodDisplay;
