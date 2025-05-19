import React, { useContext } from "react";
import cartIcon from "../../assets/cart.png";
import searchIcon from "../../assets/food search.png";
import userIcon from "../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";
const Navbar = ({ isLoggedin }) => {
  const { scrollTo, menuRef, aboutRef, contactRef, topRef } =
    useContext(ScrollContext);
  const navigate = useNavigate();
  return (
    <nav
      ref={topRef}
      className=" w-full flex items-center justify-between px-6 py-4 bg-yellow-50 shadow-md"
    >
      {/* <h1 className="text-2xl font-bold text-gray-800">FOOD DILEVERY APP</h1> */}
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-orange-500 mb-3">
          F00D DELiVERY
        </h1>
      </Link>
      {/* <div className="flex items-center justify-center bg-yellow-50 cursor-pointer">
          <img src={logo} alt="logo" className="w-38 h-14 " />
        </div> */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-orange-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => scrollTo(menuRef)}
          className="hover:text-orange-400 cursor-pointer"
        >
          Menu
        </li>
        <li
          onClick={() => scrollTo(contactRef)}
          className="hover:text-orange-400 cursor-pointer"
        >
          Contact Us
        </li>
        <li
          onClick={() => scrollTo(aboutRef)}
          className="hover:text-orange-400 cursor-pointer"
        >
          About
        </li>
      </ul>

      {isLoggedin ? (
        <div className="flex items-center space-x-4">
          <img
            src={searchIcon}
            alt="search"
            className="w-10 h-10 cursor-pointer"
          />
          <Link to={"/cart"}>
            <img
              src={cartIcon}
              alt="cart"
              className="w-10 h-10 cursor-pointer"
              // onClick={() => navigate("/cart")}
            />
          </Link>
          <img
            src={userIcon}
            alt="user"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      ) : (
        <div>
          <button className="bg-yellow-50 text-orange-400 border-1 border-solid border-grey font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2 ">
            <Link to="/register">sign up</Link>
          </button>
          <button className="bg-yellow-50 text-orange-400 border-1 border-solid border-grey font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition">
            <Link to="/login">sign in</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
