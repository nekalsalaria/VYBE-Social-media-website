import React, { useState } from "react";
import logo from "../assets/logo2.png";

const SignUp = () => {
  const [inputClicked, setInputClicked] = useState({
    name: false,
    userNmae: false,
    email: false,
    password: false,
  });
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
            onClick={() => setInputClicked({...inputClicked, name: true })}
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
            required/>
          </div>

          {/* Username Input */}
          <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black"
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
            required/>
          </div>

          {/* Email Input */}
           <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black"
            onClick={() => setInputClicked({...inputClicked, email: true })}
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
            required/>
          </div>

          {/* Password Input */}
           <div
            className="relative flex items-center justify-start
            w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black"
            onClick={() => setInputClicked({...inputClicked, password: true })}
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
              type="password"
              id="password"
              className="w-[100%] h-[100%]
                    rounded-2xl px-[20px] outline-none border-0"
            required/>
          </div>
          
        </div>
        <div
          className="md:w-[50%] h-full hidden lg:flex justify-center
        items-center bg-[#000000] flex-col gap-[10px] text-whitetext-[16px] font-semibold
        rounded-l-[30px] shadow-2xl shadow-black"
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
