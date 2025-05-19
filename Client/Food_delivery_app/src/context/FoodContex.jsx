import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { toast } from "react-toastify";
export const FoodContext = createContext(null);
const FoodContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success(`item added in your cart`);
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success(`item added in your cart`);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updated = { ...prev };
      if (updated[itemId] === 1) {
        delete updated[itemId]; // remove item from object if count becomes 0
      } else {
        updated[itemId] -= 1;
      }
      toast.warning("Item removed from your cart");
      return updated;
    });
  };

  const totalAmount = (promoCode) => {
    let calculate = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let findItem = food_list.find(
          (prod) => prod.id === item || prod.id === Number(item)
        );
        calculate += findItem.price * cartItems[item];
      }
    }
    if (promoCode === "SAVE10") {
      calculate = calculate * 0.9;
    }
    return calculate;
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalAmount,
  };
  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};
export default FoodContextProvider;
