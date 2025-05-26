import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${url}/api/orderlist`);
      if (res.data.success) {
        setOrders(res.data.data);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(`${url}/api/status`, {
        orderId,
        status: e.target.value,
      });
      if (res.data.success) {
        toast.success("Status updated");
        await fetchOrders();
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      toast.error("Error updating status");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Order Page</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border border-orange-300 rounded-lg p-4 mb-6 shadow-sm flex flex-col md:flex-row md:justify-between items-start md:items-center bg-white"
        >
          {/* Left: Image & Items */}
          <div className="flex items-start gap-4 flex-1 w-full">
            <img
              src={`http://localhost:4000/images/${order.items[0].image}`}
              alt="item"
              className="w-20 h-20 rounded object-cover border"
            />
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    <span className="font-semibold">{item.name}</span> x{" "}
                    {item.quantity}
                    {idx !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              <div className="text-gray-700 text-sm mt-3">
                <p className="font-semibold">{order.address.fullname}</p>
                <p>
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.zipcode}
                </p>
                <p>{order.address.phone}</p>
              </div>
            </div>
          </div>

          {/* Right: Count, Amount, Status */}
          <div className="mt-4 md:mt-0 text-right md:w-64">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Items:</span> {order.items.length}
            </p>
            <p className="text-sm text-gray-800 mb-2">
              <span className="font-semibold">Amount:</span> ${order.amount}
            </p>
            <select
              value={order.status}
              className="bg-orange-100 border border-orange-300 rounded px-3 py-2 w-full text-sm"
              onChange={(e) => {
                statusHandler(e, order._id);
              }}
            >
              <option value="Porcessing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
