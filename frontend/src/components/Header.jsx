import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../assets/assets.js";
import { Appcontext } from "../context/Appcontext.jsx";

const Header = () => {
  const { removeBg } = useContext(Appcontext);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-y-6 md:gap-y-8 px-8 mt-20 sm:mt-44 lg:mt-20">
      {/* Tagline */}
      <h1 className="text-3xl sm:text-6xl font-extrabold leading-tight text-gray-900">
        Transform Your Ideas into Stunning Visuals with
        <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {" "}
          Imagify!
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
        Effortlessly remove backgrounds, enhance images, and generate AI-powered
        visuals in just a few clicks. Perfect for creators, designers, and
        innovators!
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {/* Upload Button */}
        <label
          htmlFor="upload1"
          className="flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full py-3 px-6 text-lg font-semibold transition-transform transform hover:scale-105 shadow-md"
        >
          <input
            onClick={() => navigate("/result")}
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            accept="image/*"
            id="upload1"
            hidden
          />
          <img
            src={assets.upload_btn_icon}
            alt="Upload Icon"
            className="w-5 h-5 mr-2"
          />
          Remove Background
        </label>

        {/* Generate Image Button */}
        <button
          onClick={() => navigate("/generate")} // Navigate to Generate page
          className="flex items-center border border-violet-600 text-violet-600 rounded-full py-3 px-6 text-lg font-semibold transition-transform transform hover:scale-105 shadow-md"
        >
          Generate Image
          <img
            src={assets.star_icon}
            alt="Star Icon"
            className="w-5 h-5 ml-2"
          />
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-10 max-w-3xl text-center text-gray-700">
        <p className="text-lg">
          Whether you&apos;re a digital artist, e-commerce seller, or social
          media creator, Imagify empowers you with AI-driven tools to bring your
          vision to life.
        </p>
        <p className="mt-4 font-medium text-violet-600">
          ✨ Try it now and create magic with Imagify! ✨
        </p>
      </div>
    </div>
  );
};

export default Header;
