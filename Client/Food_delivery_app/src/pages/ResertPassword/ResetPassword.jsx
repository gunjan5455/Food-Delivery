import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FoodContext } from "../../context/FoodContex";
import { axiosInstance } from "../../calls";

const ResetPassword = () => {
  const { url } = useContext(FoodContext);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const onReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`${url}/api/reset`, {
        otp,
        password,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Reset Password
        </h1>

        <form onSubmit={onReset} className="space-y-5">
          <div>
            <label
              htmlFor="otp"
              className="block mb-1 font-medium text-gray-700"
            >
              OTP
            </label>
            <input
              id="otp"
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="Enter your OTP"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your new password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
