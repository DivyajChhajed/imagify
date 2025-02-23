import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/Appcontext.jsx"; // Import the context

const GenerateImage = () => {
  const { generateImage, resultImage } = useContext(Appcontext); // Get function & state from context
  const [image, setImage] = useState(assets.sample_img_2);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  // Function to handle image generation
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true); // Show loading bar
    await generateImage(input); // Call API
    setLoading(false); // Stop loading
    setImageLoaded(true); // Show generated image
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img
            src={imageLoaded ? resultImage : image}
            className="max-w-sm rounded-md"
            alt="Generated Output"
          />
          <span
            className={`absolute bottom-0 left-0 h-1.5 bg-orange-400 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : " "}>Generating...</p>
      </div>
      {!imageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your image..."
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      )}
      {imageLoaded && (
        <div className="flex gap-6 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setImageLoaded(false);
              setInput("");
            }}
            className="bg-transparent border border-zinc-900 text-black px-6 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={resultImage}
            download="generated-image.png"
            className="bg-zinc-900 px-13 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default GenerateImage;
