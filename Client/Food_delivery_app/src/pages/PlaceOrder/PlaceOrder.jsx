import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContex"; // Make sure file is named correctly
import { axiosInstance } from "../../calls";

const PlaceOrder = () => {
  const { totalAmount, promoApplied, token, food_list, cartItems, url } =
    useContext(FoodContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const subtotal = totalAmount();
  const discountedTotal = promoApplied ? subtotal * 0.9 : subtotal;
  const finalTotal = subtotal === 0 ? 0 : discountedTotal + 2;
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount(),
    };
    let res = await axiosInstance.post(url + "/api/order", orderData, {
      headers: { token },
    });
    if (res.data.success) {
      const { session_url } = res.data;
      window.location.replace(session_url);
    } else {
      alert("err");
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (totalAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Delivery Info Form */}
      <form onSubmit={placeOrder} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>

        <input
          onChange={handleOnChange}
          value={data.fullname}
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.email}
          type="text"
          name="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.street}
          type="text"
          name="street"
          placeholder="Street Address"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.city}
          type="text"
          name="city"
          placeholder="City"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.state}
          type="text"
          name="state"
          placeholder="State"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.zipcode}
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.country}
          type="text"
          name="country"
          placeholder="Country"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          onChange={handleOnChange}
          value={data.phone}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold shadow"
        >
          Proceed to Payment
        </button>
      </form>

      {/* Cart Summary */}
      <div className="space-y-4 bg-zinc-100 p-6 rounded">
        <h3 className="text-xl font-semibold">Cart Totals</h3>

        <div className="flex justify-between border-b pb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Delivery Fee</span>
          <span>+$2.00</span>
        </div>

        {promoApplied && (
          <div className="flex justify-between border-b pb-2 text-green-600">
            <span>Discount</span>
            <span>-10%</span>
          </div>
        )}

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
