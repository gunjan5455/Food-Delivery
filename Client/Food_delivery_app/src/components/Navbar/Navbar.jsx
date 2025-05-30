// import React, { useContext, useEffect, useRef, useState } from "react";
// import cartIcon from "../../assets/cart.png";
// import userIcon from "../../assets/user.png";
// import { Link, useNavigate } from "react-router-dom";
// import { ScrollContext } from "../../context/ScrollContext";
// import { FoodContext } from "../../context/FoodContex";

// const Navbar = () => {
//   const { scrollTo, menuRef, aboutRef, contactRef, topRef } =
//     useContext(ScrollContext);
//   const { token, setToken } = useContext(FoodContext);
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//     setShowDropdown(false);
//   };

//   return (
//     <nav
//       ref={topRef}
//       className="w-full flex flex-wrap items-center justify-between px-2 py-4 bg-yellow-50 shadow-md"
//     >
//       {/* Logo */}
//       <Link
//         to="/"
//         className="text-xl font-bold text-orange-500 sm:text-3xl  cursor-pointer transform transition-transform duration-200 hover:scale-120"
//       >
//         F00D DELiVERY
//       </Link>

//       {/* Mobile Menu Toggle */}
//       <button
//         className="sm:hidden text-orange-500 text-2xl"
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       >
//         ☰
//       </button>

//       {/* Menu Items */}
//       <ul
//         className={`${
//           mobileMenuOpen
//             ? "flex flex-col w-full items-start space-y-3 mt-3"
//             : "hidden"
//         } sm:flex sm:flex-row sm:space-x-6 text-gray-700 text-sm sm:text-base`}
//       >
//         <li className="hover:text-orange-400 transform transition-transform duration-200 hover:scale-120">
//           <Link to="/">Home</Link>
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
//           onClick={() => scrollTo(menuRef)}
//         >
//           Menu
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
//           onClick={() => scrollTo(contactRef)}
//         >
//           Contact Us
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer transform transition-transform duration-200 hover:scale-120"
//           onClick={() => scrollTo(aboutRef)}
//         >
//           About
//         </li>
//       </ul>

//       {/* User Controls */}
//       {token ? (
//         <div className="flex items-center space-x-4 relative">
//           <Link to="/cart">
//             <img
//               src={cartIcon}
//               alt="cart"
//               className="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
//             />
//           </Link>

//           {/* Profile Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <img
//               src={userIcon}
//               alt="user"
//               className="w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110"
//               onClick={() => setShowDropdown((prev) => !prev)}
//             />
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/myorders"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Orders
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="space-x-1">
//           <Link
//             to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2">
//               Admin
//             </button>
//           </Link>
//           <Link
//             to="/register"
//             className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2"
//           >
//             Sign Up
//           </Link>
//           <Link
//             to="/login"
//             className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition m-2"
//           >
//             Sign In
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import cartIcon from "../../assets/cart.png";
// import userIcon from "../../assets/user.png";
// import { Link, useNavigate } from "react-router-dom";
// import { ScrollContext } from "../../context/ScrollContext";
// import { FoodContext } from "../../context/FoodContex";

// const Navbar = () => {
//   const { scrollTo, menuRef, aboutRef, contactRef, topRef } =
//     useContext(ScrollContext);
//   const { token, setToken } = useContext(FoodContext);
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//     setShowDropdown(false);
//   };

//   return (
//     <nav
//       ref={topRef}
//       className="w-full h-24 bg-yellow-50 shadow-md px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between"
//     >
//       {/* Logo */}
//       <Link
//         to="/"
//         className="text-lg sm:text-2xl font-bold text-orange-500 cursor-pointer transition-transform hover:scale-105"
//       >
//         FOOD DELiVERY
//       </Link>

//       {/* Mobile Menu Toggle Button */}
//       <button
//         className="sm:hidden text-2xl text-orange-500"
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       >
//         ☰
//       </button>

//       {/* Menu Items */}
//       <ul
//         className={`${
//           mobileMenuOpen ? "flex flex-col w-full mt-3 space-y-2" : "hidden"
//         } sm:flex sm:flex-row sm:space-x-6 text-sm sm:text-base text-gray-700 sm:mt-0`}
//       >
//         <li>
//           <Link
//             to="/"
//             className="block py-1 sm:py-0 hover:text-orange-400 transition"
//           >
//             Home
//           </Link>
//         </li>
//         <li
//           onClick={() => {
//             scrollTo(menuRef);
//             setMobileMenuOpen(false);
//           }}
//           className="cursor-pointer hover:text-orange-400 transition"
//         >
//           Menu
//         </li>
//         <li
//           onClick={() => {
//             scrollTo(contactRef);
//             setMobileMenuOpen(false);
//           }}
//           className="cursor-pointer hover:text-orange-400 transition"
//         >
//           Contact Us
//         </li>
//         <li
//           onClick={() => {
//             scrollTo(aboutRef);
//             setMobileMenuOpen(false);
//           }}
//           className="cursor-pointer hover:text-orange-400 transition"
//         >
//           About
//         </li>
//       </ul>

//       {/* Right Side Controls */}
//       <div className="flex items-center mt-3 sm:mt-0 space-x-2 sm:space-x-4">
//         {token ? (
//           <>
//             <Link to="/cart">
//               <img
//                 src={cartIcon}
//                 alt="Cart"
//                 className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition"
//               />
//             </Link>

//             <div className="relative" ref={dropdownRef}>
//               <img
//                 src={userIcon}
//                 alt="User"
//                 className="w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer hover:scale-110 transition"
//                 onClick={() => setShowDropdown((prev) => !prev)}
//               />
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded z-50 text-sm">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/myorders"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Orders
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-wrap gap-1 justify-end">
//             <Link
//               to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xs sm:text-sm bg-yellow-50 border border-orange-400 text-orange-400 px-4 py-1.5 rounded-full hover:bg-orange-200 transition"
//             >
//               Admin
//             </Link>
//             <Link
//               to="/register"
//               className="text-xs sm:text-sm bg-yellow-50 border border-orange-400 text-orange-400 px-4 py-1.5 rounded-full hover:bg-orange-200 transition"
//             >
//               Sign Up
//             </Link>
//             <Link
//               to="/login"
//               className="text-xs sm:text-sm bg-yellow-50 border border-orange-400 text-orange-400 px-4 py-1.5 rounded-full hover:bg-orange-200 transition"
//             >
//               Sign In
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import cartIcon from "../../assets/cart.png";
// import userIcon from "../../assets/user.png";
// import { Link, useNavigate } from "react-router-dom";
// import { ScrollContext } from "../../context/ScrollContext";
// import { FoodContext } from "../../context/FoodContex";

// const Navbar = () => {
//   const { scrollTo, menuRef, aboutRef, contactRef, topRef } =
//     useContext(ScrollContext);
//   const { token, setToken } = useContext(FoodContext);
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//     setShowDropdown(false);
//   };

//   return (
//     <nav
//       ref={topRef}
//       className="w-full flex flex-col sm:flex-row items-center justify-between px-4 py-4 bg-yellow-50 shadow-md"
//     >
//       {/* Logo and Hamburger */}
//       <div className="w-full flex justify-between items-center sm:w-auto">
//         <Link to="/" className="text-xl font-bold text-orange-500 sm:text-3xl">
//           F00D DELiVERY
//         </Link>

//         <button
//           className="sm:hidden text-orange-500 text-3xl"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden sm:flex space-x-6 mt-4 sm:mt-0 text-gray-700 text-sm sm:text-base">
//         <li className="hover:text-orange-400">
//           <Link to="/">Home</Link>
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer"
//           onClick={() => scrollTo(menuRef)}
//         >
//           Menu
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer"
//           onClick={() => scrollTo(contactRef)}
//         >
//           Contact Us
//         </li>
//         <li
//           className="hover:text-orange-400 cursor-pointer"
//           onClick={() => scrollTo(aboutRef)}
//         >
//           About
//         </li>
//       </ul>

//       {/* User Controls Desktop */}
//       <div className="hidden sm:flex items-center gap-3 mt-4 sm:mt-0">
//         {token ? (
//           <>
//             <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
//               <img
//                 src={cartIcon}
//                 alt="cart"
//                 className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer transition-transform duration-200 hover:scale-110"
//               />
//             </Link>

//             {/* Profile Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <img
//                 src={userIcon}
//                 alt="user"
//                 className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-orange-300 p-[2px] cursor-pointer transition-transform duration-200 hover:scale-105"
//                 onClick={() => setShowDropdown((prev) => !prev)}
//               />
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/myorders"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Orders
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="flex gap-2">
//             <Link
//               to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-1 px-4 rounded-full hover:bg-orange-200 transition"
//             >
//               Admin
//             </Link>
//             <Link
//               to="/register"
//               className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-1 px-4 rounded-full hover:bg-orange-200 transition"
//             >
//               Sign Up
//             </Link>
//             <Link
//               to="/login"
//               className="bg-yellow-50 text-orange-400 border border-orange-400 font-semibold py-1 px-4 rounded-full hover:bg-orange-200 transition"
//             >
//               Sign In
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {mobileMenuOpen && (
//         <div className="w-full sm:hidden mt-4">
//           <ul className="flex flex-col space-y-2 bg-white px-4 py-3 rounded-md shadow-md text-sm text-gray-700">
//             <li>
//               <Link to="/" onClick={() => setMobileMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li
//               onClick={() => {
//                 scrollTo(menuRef);
//                 setMobileMenuOpen(false);
//               }}
//             >
//               Menu
//             </li>
//             <li
//               onClick={() => {
//                 scrollTo(contactRef);
//                 setMobileMenuOpen(false);
//               }}
//             >
//               Contact Us
//             </li>
//             <li
//               onClick={() => {
//                 scrollTo(aboutRef);
//                 setMobileMenuOpen(false);
//               }}
//             >
//               About
//             </li>

//             {token ? (
//               <>
//                 <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
//                   Cart
//                 </Link>
//                 <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
//                   Profile
//                 </Link>
//                 <Link to="/myorders" onClick={() => setMobileMenuOpen(false)}>
//                   Orders
//                 </Link>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="text-left"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-center mt-4 sm:mt-0">
//                 <Link
//                   to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-center min-w-[100px] px-4 py-2 text-sm font-semibold border border-orange-400 text-orange-400 rounded-full hover:bg-orange-200 transition bg-yellow-50"
//                 >
//                   Admin
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-center min-w-[100px] px-4 py-2 text-sm font-semibold border border-orange-400 text-orange-400 rounded-full hover:bg-orange-200 transition bg-yellow-50"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-center min-w-[100px] px-4 py-2 text-sm font-semibold border border-orange-400 text-orange-400 rounded-full hover:bg-orange-200 transition bg-yellow-50"
//                 >
//                   Sign In
//                 </Link>
//               </div>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
      className="w-full flex flex-wrap items-center justify-between px-4 py-3 bg-yellow-50 shadow-md"
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-lg sm:text-2xl font-bold text-orange-500 cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => setMobileMenuOpen(false)}
      >
        F00D DELiVERY
      </Link>

      {/* Mobile Toggle */}
      <button
        className="sm:hidden text-orange-500 text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          mobileMenuOpen
            ? "flex flex-col w-full mt-4 space-y-3 sm:space-y-0"
            : "hidden"
        } sm:flex sm:flex-row sm:space-x-6 text-gray-700 text-sm sm:text-base items-start sm:items-center`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-orange-400 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-orange-400 transition duration-200"
          onClick={() => {
            scrollTo(menuRef);
            setMobileMenuOpen(false);
          }}
        >
          Menu
        </li>
        <li
          className="cursor-pointer hover:text-orange-400 transition duration-200"
          onClick={() => {
            scrollTo(contactRef);
            setMobileMenuOpen(false);
          }}
        >
          Contact Us
        </li>
        <li
          className="cursor-pointer hover:text-orange-400 transition duration-200"
          onClick={() => {
            scrollTo(aboutRef);
            setMobileMenuOpen(false);
          }}
        >
          About
        </li>

        {token ? (
          <div className="flex items-center gap-3 relative mt-4 sm:mt-0">
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={cartIcon}
                alt="cart"
                className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer transition-transform duration-200 hover:scale-110"
              />
            </Link>

            <div className="relative" ref={dropdownRef}>
              <img
                src={userIcon}
                alt="user"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-orange-300 p-[2px] cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setShowDropdown((prev) => !prev)}
              />
              {showDropdown && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-[9999] border border-gray-200"
                  style={{ zIndex: 9999 }}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/myorders"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
            <Link
              to="https://f00d-delivery-react-admin-bygunjan.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="text-orange-500 border border-orange-400 font-medium py-1.5 px-5 rounded-full hover:bg-orange-100 text-sm sm:text-base transition">
                Admin
              </button>
            </Link>
            <Link
              to="/register"
              className="text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="text-orange-500 border border-orange-400 font-medium py-1.5 px-5 rounded-full hover:bg-orange-100 text-sm sm:text-base transition">
                Sign Up
              </button>
            </Link>
            <Link
              to="/login"
              className="text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="text-orange-500 border border-orange-400 font-medium py-1.5 px-5 rounded-full hover:bg-orange-100 text-sm sm:text-base transition">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
