import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3 className="text-lg font-semibold mb-3">Sign up</h3>
      <input id="wd-username" placeholder="username" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" placeholder="password" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password-verify" type="password" placeholder="verify password" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <Link id="wd-signup-btn" href="/account/profile">
        <button type="button" className="w-full bg-red-600 text-white rounded px-3 py-2 hover:bg-red-700 mb-3">Sign up</button>
      </Link>
      <Link id="wd-signin-link" href="/account/signin" className="text-sky-700">Sign in</Link>
    </div>
  );
}
