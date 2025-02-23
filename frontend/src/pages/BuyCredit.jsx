import { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { Appcontext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const ButCredit = () => {
  const { backendUrl, loadCreditsData } = useContext(Appcontext);
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        const token = await getToken();
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verifyrazor`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credits Added");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/user/payrazor`,
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
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
              <span className="text-3xl font-semibold">₹{item.price}</span>/
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full text-white mt-8 text-sm py-2.5 min-w-52"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButCredit;
