import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {
  const [detail,setDetail] = useState({
    email:'',
    password:''
  })
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleServer = async(e)=>{
   
    setDetail({...detail,[e.target.name]:e.target.value})
    console.log(detail)
   
  }
  const navigate = useNavigate();
  const RegisterData  = async(e)=>{
    e.preventDefault();
    try {
      if(detail.email === '' || detail.password === ''){
        toast.error('Please fill all the fields');
      }else {
        const res = await fetch('http://localhost:8090/api/auth/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            email:detail.email,
            password:detail.password
          })
        
        })
        setTimeout(()=>{
          navigate('/dashboard')
        },2000)
        const data = await res.json();
        
        if(res.status === 200){
          toast.success(data.message);
        }else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error('Enter valid email and password');
    }
  }

  return (
    <>
      <div className="login w-full h-screen bg-black text-white">
        <div className="flex justify-center items-center h-full">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={RegisterData}> 
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleServer}
                  value={detail.email}
                  className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-white">Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={detail.password}
                  onChange={handleServer}
                  className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-10 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="mb-4">
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
                  Login
                </button>
              </div>
              <div className="text-center">
                <p>
                  No account? <Link to="/register" className="text-blue-500">Register</Link>
                </p>
              </div>
            </form>
            {/* Separator line */}
            <div className="border-t-2 border-white my-4"></div>
            {/* Authentication with Google, Facebook, and GitHub */}
            <div className="flex justify-center items-center space-x-4">
              <button className="flex items-center py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white">
                <FaGoogle className="mr-2" />
                <span>Google</span>
              </button>
              <button className="flex items-center py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg text-white">
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
}

export default Login;


