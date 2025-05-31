import React, { useContext, useState } from "react";
import registerIcon from "../../assets/register.png";
import eye from "../../assets/eye.png";
import eyeoff from "../../assets/eye off.png";
import { axiosInstance } from "../../calls";
import { toast, ToastContainer } from "react-toastify";
import { FoodContext } from "../../context/FoodContex";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { url } = useContext(FoodContext);
  // const url = "http://localhost:4000";
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
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
      const response = await axiosInstance.post(`${url}/api/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      toast.success("Registration successful!");
      // alert("succsesfully Registerd");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center justify-center">
          <img src={registerIcon} alt="register" className="w-20 h-20 " />
        </div>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Name"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Register;
