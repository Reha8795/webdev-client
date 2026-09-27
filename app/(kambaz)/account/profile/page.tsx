import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" defaultValue="reha" placeholder="username" /><br />
      <input id="wd-password" type="password" defaultValue="secret" /><br />
      <input id="wd-firstname" defaultValue="Reha" placeholder="first name" /><br />
      <input id="wd-lastname" defaultValue="Jambavadekar" placeholder="last name" /><br />
      <input id="wd-dob" type="date" defaultValue="2001-01-01" /><br />
      <input id="wd-email" type="email" defaultValue="jambavadekar.r@northeastern.edu" /><br />
      <select id="wd-role" defaultValue="USER">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link id="wd-signout-btn" href="/account/signin">
        <button type="button">Sign out</button>
      </Link>
    </div>
  );
}
