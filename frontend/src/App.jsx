import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
// import { SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-blue via-purple-200 to-blue-300 text-black">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {/* <SignInButton /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredit" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
