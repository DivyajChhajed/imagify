import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import GenerateImage from "./pages/GenerateImage";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-blue via-purple-400 to-sky-300 text-black">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredit" element={<BuyCredit />} />
        <Route path="/generate" element={<GenerateImage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
