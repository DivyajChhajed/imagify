// import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-gray-900 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />

        {/* Footer Text */}
        <p className="text-sm sm:text-base opacity-80">
          &copy; {new Date().getFullYear()} Divyaj | All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-2">
          <a
            href="#"
            className="hover:text-blue-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
