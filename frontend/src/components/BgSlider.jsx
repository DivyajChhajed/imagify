import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [slider, setSlider] = useState(50);

  const handleSlider = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 pb-10 md:py-20 px-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="mb-8 sm:mb-12 text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Remove Background with High Quality & Accuracy
      </h1>

      {/* Image Slider Container */}
      <div className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
        {/* Image with Background */}
        <img
          src={assets.image_w_bg}
          alt="Original Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        />

        {/* Image without Background */}
        <img
          src={assets.image_wo_bg}
          alt="Background Removed"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${slider}%)` }}
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={handleSlider}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10 cursor-pointer bg-transparent z-10 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
