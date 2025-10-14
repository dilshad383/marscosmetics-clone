import React from "react";
import logo from "../assets/logo-brown.webp";
const SignIn = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] grid place-items-center h-screen">
        <div className="bg-white rounded-xl  px-8 py-8">
          <div className="flex justify-center">
            <img width={170} src={logo} alt="" />
          </div>
          <div className="grid gap-2 mt-6">
            <h3 className=" text-xl">Sign in</h3>
            <p className="text-[#575757]">Enter your email and we'll send you a verification code</p>
            <div className="w-full max-w-sm mt-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 outline-none transition-all  duration-300 focus:border-[#9c1a36]"
              />
            </div>
            <button className="rounded-md py-2 my-2 bg-[#9c1a36] text-white">Continue</button>

            <div className="flex gap-2 text-[#9c1a36] text-sm">
                <span>Privacy policy</span>
                <span>Terms of service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
