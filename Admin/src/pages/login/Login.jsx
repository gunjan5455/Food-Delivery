import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIcon from "../../assets/login.png";
import eye from "../../assets/eye.png";
import eyeoff from "../../assets/eye off.png";
import { toast } from "react-toastify";

const Login = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "admin" && password === "admin") {
      toast.success("Login successful!");
      setIsLogged(true);
      navigate("/add");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center justify-center">
          <img src={loginIcon} alt="login" className="w-20 h-20" />
        </div>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={onChangeHandler}
              type="text"
              placeholder="admin"
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
                value={formData.password}
                onChange={onChangeHandler}
                type={showPassword ? "text" : "password"}
                placeholder="admin"
                className="mt-1 w-full px-4 py-2 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
              >
                <img
                  src={showPassword ? eye : eyeoff}
                  alt="toggle"
                  className="w-6 h-6"
                />
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
      </div>
    </div>
  );
};

export default Login;
