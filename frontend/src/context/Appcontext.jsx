import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

const AppcontextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKENT_URL;
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { redirectToSignUp } = useClerk();
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return redirectToSignUp();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");
      const token = await getToken();
      const formData = new FormData();
      image && formData.append("image", image);
      const { data } = await axios.post(
        `${backendUrl}/api/image/remove-bg`,
        formData,
        { headers: { token } }
      );
      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
        if (data.creditBalance === 0) {
          navigate("/buycredit");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      if (!isSignedIn) {
        return redirectToSignUp();
      }
      navigate("/generate"); // Redirect to /generate page
      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
        if (data.creditBalance === 0) {
          navigate("/buycredit");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    generateImage, // Added generateImage function
    resultImage,
    setResultImage,
  };

  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};

export default AppcontextProvider;
