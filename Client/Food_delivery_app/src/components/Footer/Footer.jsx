import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";

const Footer = () => {
  const { aboutRef, contactRef } = useContext(ScrollContext);

  return (
    <footer className="bg-zinc-900 text-white py-15 mt-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:grid sm:grid-cols-3 gap-6 text-sm">
        {/* Brand Info */}
        <div>
          <Link to="/">
            <h2
              ref={aboutRef}
              className="text-xl font-bold text-orange-500 sm:text-3xl mb-2"
            >
              F00D DELiVERY
            </h2>
          </Link>
          <p className="text-xs sm:text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-white hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">GET IN TOUCH</h3>
          <ul ref={contactRef} className="text-xs sm:text-sm">
            <li>+91 6565565656633</li>
            <li>contact@fooddeliveryapp.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-3 text-center text-xs text-gray-400">
        Copyright 2025 ©{" "}
        <Link to="/">
          <span className="text-orange-500">F00D DELiVERY</span>
        </Link>{" "}
        - Made by Gunjan Kotadiya.
      </div>
    </footer>
  );
};

export default Footer;
