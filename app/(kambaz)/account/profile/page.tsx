import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3 className="text-lg font-semibold mb-3">Profile</h3>
      <input id="wd-username" defaultValue="reha" placeholder="username" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" defaultValue="secret" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-firstname" defaultValue="Reha" placeholder="first name" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-lastname" defaultValue="Jambavadekar" placeholder="last name" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-dob" type="date" defaultValue="2001-01-01" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <input id="wd-email" type="email" defaultValue="jambavadekar.r@northeastern.edu" className="w-full border border-slate-300 rounded px-3 py-2 mb-3" />
      <select id="wd-role" defaultValue="USER" className="w-full border border-slate-300 rounded px-3 py-2 mb-3">
        <option value="USER">User</option><option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option><option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn" href="/account/signin">
        <button type="button" className="w-full bg-red-600 text-white rounded px-3 py-2 hover:bg-red-700">Sign out</button>
      </Link>
    </div>
  );
}
