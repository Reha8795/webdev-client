import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" className="wd-kambaz-nav">
      <a id="wd-neu-link" href="https://www.northeastern.edu/">NEU</a>
      <Link id="wd-account-link" href="/account">Account</Link>
      <Link id="wd-dashboard-link" href="/dashboard">Dashboard</Link>
      <Link id="wd-course-link" href="/dashboard">Courses</Link>
      <Link id="wd-calendar-link" href="/dashboard">Calendar</Link>
      <Link id="wd-inbox-link" href="/dashboard">Inbox</Link>
      <Link id="wd-labs-link" href="/labs">Labs</Link>
    </div>
  );
}
