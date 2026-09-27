interface HighlightedBoxProps {
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

// Wraps nested children with the same style props (§1.3.8).
export default function HighlightedBox({
  color = "black",
  backgroundColor = "#eef",
  children,
}: HighlightedBoxProps) {
  return (
    <div style={{ color, backgroundColor, padding: 12, border: "1px solid #99c" }}>
      {children}
    </div>
  );
}
