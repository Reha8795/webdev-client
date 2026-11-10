"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAccountStore } from "../../stores/accountStore";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signin = useAccountStore((s) => s.signin);
  const router = useRouter();
  const field = "w-full border border-slate-300 rounded px-3 py-2 mb-3";
  return (
    <div id="wd-signin-screen">
      <h3 className="text-lg font-semibold mb-3">Sign in</h3>
      <input id="wd-username" className={field} placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input id="wd-password" type="password" className={field} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button id="wd-signin-btn" className="w-full bg-red-600 text-white rounded px-3 py-2 mb-3"
        onClick={() => { signin(username || "user"); router.push("/dashboard"); }}>Sign in</button>
      <Link id="wd-signup-link" href="/account/signup" className="text-sky-700">Sign up</Link>
    </div>
  );
}
