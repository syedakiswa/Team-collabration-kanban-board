'use client'
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const router = useRouter();

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      showToast("Account nahi hai. Pehle signup kar lein!", "error");
      return;
    }

    if (user.password !== password) {
      showToast("Password galat hai!", "error");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    showToast("Aap login ho gaye hain!", "success");
    setTimeout(() => {
      router.push("/workspace");
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

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-800 p-6">
        <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
          <div className="text-center mb-6">
            <span className="inline-block bg-white p-3 rounded-full mb-2 text-3xl">
        <img src="/logo.png" alt="Logo" width={55} />
            </span>
            <h2 className="text-3xl font-bold text-white mb-1">Log In</h2>
            <p className="text-gray-400">Log in with email address</p>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Login
            </button>
          </div>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
}