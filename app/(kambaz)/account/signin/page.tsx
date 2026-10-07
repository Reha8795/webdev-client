import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3 className="text-lg font-semibold mb-3">Sign in</h3>
      <input id="wd-username" placeholder="username" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" placeholder="password" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <Link id="wd-signin-btn" href="/dashboard">
        <button type="button" className="w-full bg-red-600 text-white rounded px-3 py-2 hover:bg-red-700 mb-3">Sign in</button>
      </Link>
      <Link id="wd-signup-link" href="/account/signup" className="text-sky-700">Sign up</Link>
    </div>
  );
}
