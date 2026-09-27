import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" defaultValue="" />
      <br />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        defaultValue=""
      />
      <br />
      {/* Sign in button points at /dashboard */}
      <Link id="wd-signin-btn" href="/dashboard">
        <button type="button">Sign in</button>
      </Link>
      <br />
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div>
  );
}
