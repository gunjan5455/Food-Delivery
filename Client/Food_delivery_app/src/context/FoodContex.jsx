import axios from "axios";
import { axiosInstance } from "../calls";
import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
export const FoodContext = createContext(null);

const FoodContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [promoApplied, setPromoApplied] = useState(false);
  const [food_list, setFoodList] = useState([]);
  const url = "https://f00d-delivery-mern-bygunjan.onrender.com";
  //const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const fetchFood = async () => {
    const response = await axiosInstance.get(url + "/api/food/food");
    setFoodList(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFood();
      await loadCart(localStorage.getItem("token"));
    }
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      console.log("Page reloaded - token restored");
    }
    loadData();
  }, []);
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success(`item added in your cart`);
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success(`item added in your cart`);
    }
    if (token) {
      await axiosInstance.post(
        url + "/api/cart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
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
    if (token) {
      await axiosInstance.put(
        url + "/api/cart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const loadCart = async (token) => {
    const res = await axiosInstance.get(
      url + "/api/cart",
      {},
      { headers: { token } }
    );
    setCartItems(res.data.cartData);
  };
  const totalAmount = () => {
    let calculate = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let findItem = food_list.find(
          (prod) => prod._id === item || prod._id === Number(item)
        );
        calculate += findItem.price * cartItems[item];
      }
    }
    // if (promoApplied) {
    //   calculate = calculate * 0.9;
    // }
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
    promoApplied,
    setPromoApplied,
    url,
    token,
    setToken,
  };
  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};
export default FoodContextProvider;
