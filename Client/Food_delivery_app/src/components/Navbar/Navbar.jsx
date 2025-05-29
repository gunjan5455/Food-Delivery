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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className="w-full flex flex-wrap items-center justify-between px-4 py-6 bg-yellow-50 shadow-md"
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold text-orange-500 sm:text-3xl  cursor-pointer transform transition-transform duration-200 hover:scale-120"
      >
        F00D DELiVERY
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-orange-500 text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          mobileMenuOpen
            ? "flex flex-col w-full items-start space-y-3 mt-3"
            : "hidden"
        } sm:flex sm:flex-row sm:space-x-6 text-gray-700 text-sm sm:text-base`}
      >
        <li className="hover:text-orange-400 transform transition-transform duration-200 hover:scale-120">
          <Link to="/">Home</Link>
        </li>
        <li
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
          onClick={() => scrollTo(menuRef)}
        >
          Menu
        </li>
        <li
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
          onClick={() => scrollTo(contactRef)}
        >
          Contact Us
        </li>
        <li
          className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
          onClick={() => scrollTo(aboutRef)}
        >
          About
        </li>
      </ul>

      {/* User Controls */}
      {token ? (
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <img
              src={cartIcon}
              alt="cart"
              className="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
            />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              src={userIcon}
              alt="user"
              className="w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110"
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/myorders"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Orders
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
        <div className="space-x-2">
          <Link
            to="/register"
            className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
