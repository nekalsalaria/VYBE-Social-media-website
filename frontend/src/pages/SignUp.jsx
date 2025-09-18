import React, { useState } from "react";
import logo1 from "../assets/favicon.png";
import logo from "../assets/logo2.png";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { serverURL } from "../App";

const SignUp = () => {
  const [inputClicked, setInputClicked] = useState({
    name: false,
    userName: false,
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!serverURL) {
      console.error("serverURL is not defined.");
      return;
    }
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/signup`,
        { name, userName, email, password },
        { withCredentials: true }
      );
      console.log(result.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something else happened
        console.error("Axios error:", error.message);
      }
    }
  }

  return (
    <div
      className="w-full h-screen bg-gradient-to-b
     from-black to-gray-900 flex 
    flex-col justify-center items-center"
    >
      <div
        className="w-[90%] lg:max-w-[60%] h-[600px]
      bg-white rounded-2xl flex justify-center items-center
      overflow-hidden border-2 border-[#1a1f23]"
      >
        <div
          className="w-full lg:w-[50%] h-full bg-white 
        flex flex-col items-center p-[10px] gap-[20px]"
        >
          <div
            className="flex gap-[10px] items-center text-[20px]
            font-semibold mt-[40px]"
          >
            <span>Sign Up to </span>
            <img src={logo} alt="" className="w-[70px]" />
          </div>

          {/* name Input */}
          <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, name: true })}
          >
            <label
              htmlFor="name"
              className={`text-gray-700 absolute
                left-[20px] p-[5px] bg-white text-[15px] ${
                  inputClicked.name ? "top-[-15px]" : ""
                }`}
            >
              Enter Your Name{" "}
            </label>
            <input
              type="text"
              id="name"
              className="w-[100%] h-[100%]
                    rounded-2xl px-[20px] outline-none border-0"
              required
              onChange={(e) => setName(e.target.value)} value={name}
            />
          </div>

          {/* Username Input */}
          <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, userName: true })}
          >
            <label
              htmlFor="userName"
              className={`text-gray-700 absolute
                left-[20px] p-[5px] bg-white text-[15px] ${
                  inputClicked.userName ? "top-[-15px]" : ""
                }`}
            >
              Enter Your Username{" "}
            </label>
            <input
              type="text"
              id="userName"
              className="w-[100%] h-[100%]
                    rounded-2xl px-[20px] outline-none border-0"
              required
              onChange={(e) => setUserName(e.target.value)} value={userName}
            />
          </div>

          {/* Email Input */}
          <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, email: true })}
          >
            <label
              htmlFor="email"
              className={`text-gray-700 absolute
                left-[20px] p-[5px] bg-white text-[15px] ${
                  inputClicked.email ? "top-[-15px]" : ""
                }`}
            >
              Enter Your Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="w-[100%] h-[100%]
                    rounded-2xl px-[20px] outline-none border-0"
              required
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>

          {/* Password Input */}
          <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl border-2 border-black"
            onClick={() => setInputClicked({ ...inputClicked, password: true })}
          >
            <label
              htmlFor="password"
              className={`text-gray-700 absolute
                left-[20px] p-[5px] bg-white text-[15px] ${
                  inputClicked.password ? "top-[-15px]" : ""
                }`}
            >
              Enter Password{" "}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-[100%] h-[100%]
                    rounded-2xl px-[20px] outline-none border-0"
              required
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
            {!showPassword ? (
              <IoMdEye
                className="absolute right-[20px] cursor-pointer w-[25px] h-[25px]"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoMdEyeOff
                className="absolute right-[20px] cursor-pointer w-[25px] h-[25px]"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <button className="mt-[20px] w-[90%] h-[50px] bg-black text-white rounded-2xl cursor-pointer
          hover:bg-white hover:text-black hover:border-2 hover:border-black
          duration-300 font-semibold text-[18px]" onClick={handleSignup}>
            Sign Up
          </button>
          <p>Already have an account? <span className="text-blue-500 cursor-pointer underline">Sign In</span></p>
        </div>

        <div
          className="md:w-[50%] h-full hidden lg:flex justify-center
        items-center bg-[#000000] flex-col gap-[10px] text-whitetext-[16px] font-semibold
        rounded-l-[30px] shadow-2xl shadow-black"
        >
          <img src={logo1} alt="" className="w-[100%] h-[100%] object-cover" />
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
