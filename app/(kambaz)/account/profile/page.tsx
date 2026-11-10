"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAccountStore } from "../../stores/accountStore";

export default function Profile() {
  const currentUser = useAccountStore((s) => s.currentUser);
  const signout = useAccountStore((s) => s.signout);
  const router = useRouter();
  useEffect(() => { if (!currentUser) router.replace("/account/signin"); }, [currentUser, router]);
  if (!currentUser) return null; // no user details shown when signed out
  const field = "w-full border border-slate-300 rounded px-3 py-2 mb-3";
  return (
    <div id="wd-profile-screen">
      <h3 className="text-lg font-semibold mb-3">Profile</h3>
      <input id="wd-username" className={field} defaultValue={currentUser.username} />
      <input id="wd-firstname" className={field} defaultValue={currentUser.firstName} />
      <input id="wd-lastname" className={field} defaultValue={currentUser.lastName} />
      <button id="wd-signout-btn" className="w-full bg-red-600 text-white rounded px-3 py-2"
        onClick={() => { signout(); router.push("/account/signin"); }}>Sign out</button>
    </div>
  );
}
