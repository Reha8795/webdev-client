"use client";
import Link from "next/link";
import { useAccountStore } from "../stores/accountStore";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const currentUser = useAccountStore((s) => s.currentUser);
  const linkCls = "pb-2 text-sky-700 hover:border-b-2 hover:border-sky-700";
  return (
    <div id="wd-account-screen" className="max-w-md">
      <h2 className="text-2xl font-bold mb-3">Account</h2>
      <nav id="wd-account-navigation" className="flex gap-4 border-b border-slate-200 mb-4">
        {!currentUser && <Link href="/account/signin" className={linkCls}>Signin</Link>}
        {!currentUser && <Link href="/account/signup" className={linkCls}>Signup</Link>}
        {currentUser && <Link href="/account/profile" className={linkCls}>Profile</Link>}
      </nav>
      <div>{children}</div>
    </div>
  );
}
