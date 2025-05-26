import React, { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContex";
import { axiosInstance } from "../../calls";

const Verify = () => {
  const [params] = useSearchParams();
  const success = params.get("success");
  const orderId = params.get("orderId");

  const { url } = useContext(FoodContext);
  const navigate = useNavigate();

  const verifypayment = async () => {
    try {
      const res = await axiosInstance.post(`${url}/api/verify`, {
        success,
        orderId,
      });

      if (res.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifypayment();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-4 border-t-transparent border-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Verify;
