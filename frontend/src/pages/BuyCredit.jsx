import { assets, plans } from "../assets/assets";

const ButCredit = () => {
  return (
    <div className="min-h-[60vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 rounded-full px-10 py-2 mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10">
        Choose the plan that&apos;s right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-xl py-12 px-8 text-gray-700 hover:scale-110 transition-all duration-500"
          >
            <img src={assets.logo_icon} width={40} />
            <p className="mt-3 text-2xl font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-4">
              <span className="text-3xl font-semibold">${item.price}</span>/
              {item.credits} credits
            </p>
            <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full text-white mt-8 text-sm py-2.5 min-w-52">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButCredit;
