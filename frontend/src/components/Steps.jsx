import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-2">
        How it works
      </h1>
      <p className="text-base sm:text-lg text-gray-600 text-center mb-8">
        Transform words into stunning images
      </p>

      {/* Steps Container */}
      <div className="w-full max-w-xl sm:max-w-2xl space-y-6">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-4 px-6 sm:px-6 bg-white/20 shadow-lg border border-gray-400 cursor-pointer hover:scale-105 transition-all duration-300 rounded-2xl text-center sm:text-left"
          >
            <img src={item.icon} alt="" className="w-10 sm:w-12" />
            <div>
              <h2 className="text-lg sm:text-xl font-medium">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
