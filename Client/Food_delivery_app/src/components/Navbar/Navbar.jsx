import React, { useContext, useEffect, useRef, useState } from "react";
import cartIcon from "../../assets/cart.png";
import userIcon from "../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";
import { FoodContext } from "../../context/FoodContex";

const Navbar = () => {
  const { scrollTo, menuRef, aboutRef, contactRef, topRef } =
    useContext(ScrollContext);
  const { token, setToken } = useContext(FoodContext);
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setShowDropdown(false);
  };

  return (
    <nav
      ref={topRef}
      className="w-full flex items-center justify-between px-6 py-4 bg-yellow-50 shadow-md relative"
    >
      <Link to="/">
        <h1 className="text-3xl font-bold text-orange-500 mb-3 transform transition-transform duration-200 hover:scale-120">
          F00D DELiVERY
        </h1>
      </Link>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120">
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => scrollTo(menuRef)}
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
        >
          Menu
        </li>
        <li
          onClick={() => scrollTo(contactRef)}
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
        >
          Contact Us
        </li>
        <li
          onClick={() => scrollTo(aboutRef)}
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
        >
          About
        </li>
      </ul>

      {token ? (
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <img
              src={cartIcon}
              alt="cart"
              className="w-10 h-10 cursor-pointer transform transition-transform duration-200 hover:scale-120"
            />
          </Link>

          {/* Profile Dropdown Toggle */}
          <div className="relative" ref={dropdownRef}>
            <img
              src={userIcon}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer transform transition-transform duration-200 hover:scale-120"
              onClick={() => setShowDropdown((prev) => !prev)}
            />

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/myorders"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Order
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link
            to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-50 text-orange-400 border border-gray-300 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2">
              Admin
            </button>
          </Link>
          <button className="bg-yellow-50 text-orange-400 border border-gray-300 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2">
            <Link to="/register">sign up</Link>
          </button>
          <button className="bg-yellow-50 text-orange-400 border border-gray-300 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition">
            <Link to="/login">sign in</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
