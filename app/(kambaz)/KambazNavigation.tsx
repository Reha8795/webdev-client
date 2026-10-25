"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaTachometerAlt, FaBook, FaRegCalendarAlt, FaInbox, FaFlask } from "react-icons/fa";

const links = [
  { id: "wd-account-link", href: "/account", label: "Account", Icon: FaRegCircleUser, match: "/account" },
  { id: "wd-dashboard-link", href: "/dashboard", label: "Dashboard", Icon: FaTachometerAlt, match: "/dashboard" },
  { id: "wd-course-link", href: "/dashboard", label: "Courses", Icon: FaBook, match: "/courses" },
  { id: "wd-calendar-link", href: "/dashboard", label: "Calendar", Icon: FaRegCalendarAlt, match: "/calendar" },
  { id: "wd-inbox-link", href: "/dashboard", label: "Inbox", Icon: FaInbox, match: "/inbox" },
  { id: "wd-labs-link", href: "/labs", label: "Labs", Icon: FaFlask, match: "/labs" },
];

export default function KambazNavigation() {
  const pathname = usePathname() || "";
  return (
    <div id="wd-kambaz-navigation" className="flex flex-col items-center w-[100px] min-h-screen bg-black text-white">
      <a id="wd-neu-link" href="https://www.northeastern.edu/" className="block py-5 text-red-600 font-extrabold text-xl">NEU</a>
      {links.map(({ id, href, label, Icon, match }) => {
        const active = pathname === match || pathname.startsWith(match + "/");
        return (
          <Link
            key={id}
            id={id}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              "wd-nav-item flex flex-col items-center gap-1 w-full py-4 text-xs " +
              (active ? "bg-white text-red-600 font-bold" : "text-red-500 hover:bg-zinc-800 hover:text-white")
            }
          >
            <Icon className="text-2xl" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
