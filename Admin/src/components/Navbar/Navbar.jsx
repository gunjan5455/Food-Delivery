import React from "react";
import userIcon from "../../assets/user.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("called");
    setIsLogged(false);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between h-18 px-6 py-4 bg-yellow-50 border-b border-gray-300 shadow-md">
      <h2 className="text-3xl font-bold text-orange-500 mb-3">
        F00D DELiVERY<span className="text-black">.</span>{" "}
        <span className="text-sm font-normal">ADMIN PANEL</span>
      </h2>
      <div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-orange-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition-all"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
            alt="logout"
            className="w-5 h-5"
          />
          <span>Logout</span>
        </button>
        {/* <img
          src={userIcon}
          alt="User Icon"
          className="w-10 h-10 rounded-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
