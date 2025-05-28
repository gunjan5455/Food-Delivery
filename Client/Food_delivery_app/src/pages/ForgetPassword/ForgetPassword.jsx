import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FoodContext } from "../../context/FoodContex";
import { axiosInstance } from "../../calls";

const ForgetPassword = () => {
  const { url } = useContext(FoodContext);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const onSendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`${url}/api/forget`, {
        email,
      });
      if (response.data.status === "success") {
        toast.success(response.data.message);
        navigate("/reset");
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
          Forget Password
        </h1>

        <form onSubmit={onSendOTP} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold"
          >
            Send OTP
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Existing User?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
