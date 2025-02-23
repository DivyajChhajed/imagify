import { useContext, useRef } from "react";
import { Appcontext } from "../context/Appcontext";

const Result = () => {
  const { resultImage, image, removeBg } = useContext(Appcontext);
  const fileInputRef = useRef(null);

  // Function to trigger file selection
  const handleGenerateAnother = () => {
    fileInputRef.current.click(); // Opens the file upload dialog
  };

  // Handle file selection and process background removal
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      removeBg(selectedFile); // Calls the removeBg function with the new image
    }
  };

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[50vh]">
      <div className="bg-white rounded-2xl px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8 ">
          {/* Left - Original Image */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <div>
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
                className="rounded-lg border"
              />
            </div>
          </div>

          {/* Right - Background Removed Image */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="rounded-md border h-full relative bg-layer overflow-hidden">
              <img src={resultImage ? resultImage : ""} alt="" className="" />
              {!resultImage && image && (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-violet-400 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
          <button
            onClick={handleGenerateAnother} // Open file selection
            className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-300"
          >
            Remove Background
          </button>
          <a
            href={resultImage}
            download
            className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-300"
          >
            Download Image
          </a>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Result;
