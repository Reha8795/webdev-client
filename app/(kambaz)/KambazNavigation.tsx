import Link from "next/link";
import {
  FaRegCircleUser,
} from "react-icons/fa6";
import {
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaFlask,
} from "react-icons/fa";

const links = [
  { id: "wd-account-link", href: "/account", label: "Account", Icon: FaRegCircleUser },
  { id: "wd-dashboard-link", href: "/dashboard", label: "Dashboard", Icon: FaTachometerAlt },
  { id: "wd-course-link", href: "/dashboard", label: "Courses", Icon: FaBook },
  { id: "wd-calendar-link", href: "/dashboard", label: "Calendar", Icon: FaRegCalendarAlt },
  { id: "wd-inbox-link", href: "/dashboard", label: "Inbox", Icon: FaInbox },
  { id: "wd-labs-link", href: "/labs", label: "Labs", Icon: FaFlask },
];

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      className="flex flex-col items-center w-[100px] min-h-screen bg-black text-white"
    >
      <a
        id="wd-neu-link"
        href="https://www.northeastern.edu/"
        className="block py-5 text-red-600 font-extrabold text-xl"
      >
        NEU
      </a>
      {links.map(({ id, href, label, Icon }) => (
        <Link
          key={id}
          id={id}
          href={href}
          className="flex flex-col items-center gap-1 w-full py-4 text-red-500 hover:bg-zinc-800 hover:text-white text-xs"
        >
          <Icon className="text-2xl" />
          {label}
        </Link>
      ))}
    </div>
  );
}
