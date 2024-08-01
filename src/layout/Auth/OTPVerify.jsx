import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OTPVerify = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("OTP has been sent to your registered email");
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    try {
      if (otpValue.length !== 6) {
        toast.error("Please enter a 6-digit OTP");
      } else {
        const res = await fetch("http://localhost:8090/api/auth/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: otpValue }),
        });
        const data = await res.json();
        if (res.status === 200) {
          toast.success(data.message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error("Invalid OTP, please try again");
    }
  };

  return (
    <>
      <div className="otp-verify w-full h-screen bg-black text-white">
        <div className="flex justify-center items-center h-full">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden p-4">
            <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
            <p className="mb-4 text-center text-white">
              OTP has been sent to your registered email
            </p>
            <form onSubmit={handleVerify}>
              <div className="mb-4 flex justify-center space-x-2">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 text-center text-xl rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                  />
                ))}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default OTPVerify;
