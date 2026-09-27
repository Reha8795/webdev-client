import Link from "next/link";

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <nav id="wd-account-navigation">
        <Link href="/account/signin">Signin</Link> |{" "}
        <Link href="/account/signup">Signup</Link> |{" "}
        <Link href="/account/profile">Profile</Link>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
}
