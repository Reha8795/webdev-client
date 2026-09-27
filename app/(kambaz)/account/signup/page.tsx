import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username" />
      <br />
      <input id="wd-password" type="password" placeholder="password" />
      <br />
      <input
        id="wd-password-verify"
        type="password"
        placeholder="verify password"
      />
      <br />
      <Link id="wd-signup-btn" href="/account/profile">
        <button type="button">Sign up</button>
      </Link>
      <br />
      <Link id="wd-signin-link" href="/account/signin">Sign in</Link>
    </div>
  );
}
