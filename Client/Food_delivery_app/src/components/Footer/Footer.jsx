import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";

const Footer = () => {
  const { aboutRef, contactRef } = useContext(ScrollContext);
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <Link to={"/"}>
            <h2
              ref={aboutRef}
              className="text-3xl font-bold text-orange-500 mb-3 transform transition-transform duration-200 hover:scale-110"
            >
              F00D DELiVERY
            </h2>
          </Link>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-white hover:text-orange-500 transform transition-transform duration-200 hover:scale-120"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 transform transition-transform duration-200 hover:scale-120"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 transform transition-transform duration-200 hover:scale-120"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 ">GET IN TOUCH</h3>
          <ul ref={contactRef} className="text-sm text-gray-300 space-y-2">
            <li>+91 6565565656633</li>
            <li>contact@fooddeliveryapp.com</li>
          </ul>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
          Copyright 2025 ©{" "}
          <Link to={"/"}>
            <span className="text-orange-500">F00D DELiVERY</span>
          </Link>{" "}
          - Made by gunjan kotadiya.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
