import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../context/FoodContex";
import { axiosInstance } from "../../calls";

const MyOrders = () => {
  const { url, token } = useContext(FoodContext);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axiosInstance.get(url + "/api/order", {
      headers: { token },
    });
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <div className="p-6  bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      {data.map((order) => (
        <div
          key={order._id}
          className="border rounded-xl p-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white shadow-sm"
        >
          {/* Image + Summary */}
          <div className="flex items-start gap-4 flex-1">
            <img
              src={`${url}/images/${order.items[0].image}`}
              alt="item"
              className="w-16 h-16 object-cover rounded-md border"
            />
            <div className="text-sm flex flex-wrap items-center gap-1">
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Price + Items count */}
          <div className="text-sm text-right md:text-left w-28">
            <div className="font-semibold text-gray-800">
              ${order.amount}.00
            </div>
            <div className="text-gray-500">Items: {order.items.length}</div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 w-36 text-sm text-gray-700">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {order.status === "Processing" || order.status === "Porcessing"
              ? "Food Processing"
              : order.status}
          </div>

          {/* Track Button */}
          <button className="bg-orange-100 text-orange-600 font-medium py-1 px-4 rounded hover:bg-orange-200 transition">
            Track Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
