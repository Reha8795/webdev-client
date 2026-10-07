import Link from "next/link";

export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="wd-account-screen" className="max-w-md">
      <h2 className="text-2xl font-bold mb-3">Account</h2>
      <nav id="wd-account-navigation" className="flex gap-4 border-b border-slate-200 mb-4">
        <Link href="/account/signin" className="pb-2 text-sky-700 hover:border-b-2 hover:border-sky-700">Signin</Link>
        <Link href="/account/signup" className="pb-2 text-sky-700 hover:border-b-2 hover:border-sky-700">Signup</Link>
        <Link href="/account/profile" className="pb-2 text-sky-700 hover:border-b-2 hover:border-sky-700">Profile</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
