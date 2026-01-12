
'use client'
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const router = useRouter();

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      showToast("Sab fields fill karein!", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      showToast("Email pehle se registered hai! Login kar lein.", "error");
      return;
    }

    const newUser = {
      email,
      name: username,
      password,
      joinDate: "January 2026",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Aap successful signup ho gaye! Ab login kar lein.", "success");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="w-full max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-white rounded-full mb-4">
                <span className="text-3xl">
                  <img src="/logo.png" alt="Logo" width={55}/>
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Sign Up</h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your Username"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600 placeholder-gray-400"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600 placeholder-gray-400"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center text-gray-400 mt-6">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/login")}
                className="text-purple-400 hover:text-purple-300 font-medium transition"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}