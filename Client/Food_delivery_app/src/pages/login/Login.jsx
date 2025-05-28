import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIcon from "../../assets/login.png";
import eye from "../../assets/eye.png";
import eyeoff from "../../assets/eye off.png";

import { axiosInstance } from "../../calls";
import { toast } from "react-toastify";
import { FoodContext } from "../../context/FoodContex";
const Login = ({ isLoggedin, setLoggedin }) => {
  const { url, token, setToken } = useContext(FoodContext);
  const navigate = useNavigate();
  console.log(isLoggedin);
  // const url = "http://localhost:4000";
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`${url}/api/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log("Generated token:", response.data.token);
      toast.success("Login successful!");
      console.log(isLoggedin);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center justify-center">
          <img src={loginIcon} alt="login" className="w-20 h-20 " />
        </div>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
              >
                {!showPassword ? (
                  <div className="flex items-center justify-center">
                    <img src={eyeoff} alt="eyeoff" className="w-8 h-8 " />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <img src={eye} alt="eye" className="w-8 h-8 " />
                  </div>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
