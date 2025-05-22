import React from "react";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-18 px-6 py-4 bg-yellow-50 border-b border-gray-300 shadow-md">
      <h2 className="text-3xl font-bold text-orange-500 mb-3">
        F00D DELiVERY<span className="text-black">.</span>{" "}
        <span className="text-sm font-normal">ADMIN PANEL</span>
      </h2>
      <div>
        <img
          src={userIcon}
          alt="User Icon"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
