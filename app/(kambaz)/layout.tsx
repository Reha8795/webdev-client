import KambazNavigation from "./KambazNavigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="wd-kambaz" className="flex min-h-screen">
      <KambazNavigation />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}
