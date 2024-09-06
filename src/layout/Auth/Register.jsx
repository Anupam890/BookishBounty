import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [detail, setDetail] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
   
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!detail.username || !detail.email || !detail.password) {
      toast.error("All fields are required");
    } else {
      try {
        const response = await fetch("http://localhost:8090/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(detail),
        });
        const data = await response.json();
        if (response.status === 201) {
          toast.success("Successfully registered");
          setDetail({
            username: "",
            email: "",
            password: "",
          });
          navigate("otp-verify");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("An error occurred, please try again");
      }
    }
  };

  return (
    <>
      <div className="container max-w-full h-screen bg-black text-white ">
        <div className="flex justify-center items-center h-full">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden p-5">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={detail.username}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={detail.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={detail.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                >
                  Register
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            {/* Separator line */}
            <div className="border-t-2 border-white my-4"></div>
            {/* Authentication with Google, Facebook, and GitHub */}
            <div className="flex justify-center items-center space-x-4">
              <button className="flex items-center py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded-lg text-white">
                <FaGoogle className="mr-2" />
                <span>Google</span>
              </button>
              <button className="flex items-center py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded-lg text-white">
                <FaFacebook className="mr-2" />
                <span>Facebook</span>
              </button>
              <button className="flex items-center py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded-lg text-white">
                <FaGithub className="mr-2" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
