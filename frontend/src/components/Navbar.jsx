import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 max-w-9xl mx-auto">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-28 sm:w-32 md:w-40"
          alt="Imagify Logo"
        />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="flex items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full py-2 px-4 sm:py-3 sm:px-5 text-sm sm:text-sm md:text-sm font-semibold gap-2 sm:gap-3 transition-transform transform hover:scale-105"
        >
          Get Started
          <img
            src={assets.arrow_icon}
            className="w-3 sm:w-4 md:w-5"
            alt="Arrow Icon"
          />
        </button>
      )}

      {/* Get Started Button */}
    </div>
  );
};

export default Navbar;
