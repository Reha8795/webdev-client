import TOC from "./TOC";

// Wraps every /labs page with the TOC via children (§1.3.11)
export default function LabsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="wd-labs-layout">
      <TOC />
      <div>{children}</div>
    </div>
  );
}
