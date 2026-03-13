"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [setupDone, setSetupDone] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("bl_admin_token");
    if (token) router.replace("/admin/dashboard");
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("bl_admin_token", data.token);
      localStorage.setItem("bl_admin_user", data.username);
      router.replace("/admin/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSetup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/setup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Setup failed");
      setSetupDone(true);
      setShowSetup(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Setup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-[#033b5d] px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-[420px]">
        <div className="text-center mb-8">
          <Image
            src="/images/brlightlight-icon.webp"
            alt="Brightlight Immigration"
            width={60}
            height={60}
            className="mx-auto mb-4 w-[50px] h-auto"
          />
          <h1 className="text-[24px] font-bold text-primary">Admin Portal</h1>
          <p className="text-[14px] text-primary/50 mt-1">
            Brightlight Immigration
          </p>
        </div>

        {setupDone && (
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-[14px] text-green-700 mb-4">
            Admin account created! You can now log in.
          </div>
        )}

        <form
          onSubmit={showSetup ? handleSetup : handleLogin}
          className="space-y-4"
        >
          <div>
            <label className="block text-[13px] font-semibold text-primary mb-1.5">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-primary mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-500 bg-red-50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg text-[15px] font-semibold hover:bg-primary/90 disabled:opacity-60 transition-colors duration-200 mt-2 cursor-pointer"
          >
            {loading
              ? "Please wait…"
              : showSetup
                ? "Create Admin"
                : "Sign In"}
          </button>
        </form>

        <p className="text-center text-[12px] text-primary/40 mt-6">
          First time?{" "}
          <button
            onClick={() => {
              setShowSetup(!showSetup);
              setError("");
            }}
            className="text-gold hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            {showSetup ? "Back to login" : "Set up admin account"}
          </button>
        </p>
      </div>
    </div>
  );
}
