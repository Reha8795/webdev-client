import KambazNavigation from "./KambazNavigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="wd-kambaz" className="wd-kambaz">
      <KambazNavigation />
      <div className="wd-kambaz-main">{children}</div>
    </div>
  );
}
