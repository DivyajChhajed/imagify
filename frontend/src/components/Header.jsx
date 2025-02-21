import { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Appcontext } from "../context/Appcontext.jsx";

const Header = () => {
  const { removeBg } = useContext(Appcontext);
  return (
    <div className="min-h-[48vh] flex flex-col items-center justify-center text-center gap-y-6 md:gap-y-8 px-4 mt-20 sm:mt-44 lg:mt-20">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
        Turn Ideas into Visuals and Edit Like a Pro with{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Imagify!
        </span>
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {/* Upload Button */}
        <label
          htmlFor="upload1"
          className="flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full py-2 px-4 sm:py-3 sm:px-5 text-sm sm:text-base font-medium transition-transform transform hover:scale-105"
        >
          <input
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            accept="image/*"
            id="upload1"
            hidden
          />
          <img
            src={assets.upload_btn_icon}
            alt="Upload Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
          />
          Upload Image
        </label>

        {/* Get Started Button */}
        <button className="flex items-center  border border-violet-600 text-violet-600 rounded-full py-2 px-4 sm:py-3 sm:px-5 text-sm sm:text-base font-medium transition-transform transform hover:scale-105">
          Generate Image
          <img
            src={assets.star_icon}
            alt="Star Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
