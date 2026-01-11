'use client'

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // 🔥 form submit roko
   router.push("/workspace");

  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #160a28, #261643)",
      }}
    >
      <div className="text-center w-full max-w-md px-6 py-2">
        <img src="/logo.png" alt="Logo Image" className="mx-auto mb-4 bg-white rounded-full w-28" />

        <h2 className="text-white font-bold text-5xl">Log In</h2>
        <p className="mt-6 text-white font-semibold">
          Log in with email address
        </p>

        <form className="mt-8 space-y-6 w-full" onSubmit={handleLogin}>
          {/* Email */}
          <div className="relative">
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full pl-4 pr-12 py-3 input-bg text-white rounded-md focus:outline-none"
            />
            <img
              src="/email.png"
              alt="Email icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-4 pr-12 py-3 input-bg text-white rounded-md focus:outline-none"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 text-white text-xl linear-gradient rounded-md cursor-pointer"
          >
            Login
          </button>

          <span className="text-gray-400 font-semibold">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-600">
              Sign Up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
