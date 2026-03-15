"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) setMessage(error.message);
      else router.push("/");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) setMessage(error.message);
      else setMessage("Check your email to confirm signup.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleAuth} className="flex flex-col gap-4">

          <input
            className="border p-2 rounded text-black"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border p-2 rounded text-black"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "No account?" : "Already have an account?"}
        </p>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 w-full mt-2"
        >
          {isLogin ? "Create account" : "Login instead"}
        </button>

        {message && (
          <p className="text-center text-sm text-red-500 mt-4">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}