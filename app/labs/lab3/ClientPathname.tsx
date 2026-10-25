"use client";
import { usePathname } from "next/navigation";

export default function ClientPathname() {
  const pathname = usePathname() || "";
  return (
    <div id="wd-client-component">
      <p id="wd-pathname">Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}
