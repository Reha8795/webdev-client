interface HighlightedParagraphProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

// Style props are attributes only (§1.3.7).
export default function HighlightedParagraph({
  text,
  color = "black",
  backgroundColor = "yellow",
}: HighlightedParagraphProps) {
  return (
    <p style={{ color, backgroundColor, padding: 8 }}>{text}</p>
  );
}
