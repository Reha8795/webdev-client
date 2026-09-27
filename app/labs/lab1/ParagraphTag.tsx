export default function ParagraphTag() {
  return (
    <div id="wd-paragraph-tag">
      {/* --- Book sample (§1.3.2) --- */}
      <h4>Paragraph Tag</h4>
      <p>
        The paragraph element wraps a block of text and browsers add vertical
        spacing above and below it, separating one paragraph from the next.
      </p>
      <p>
        Without paragraph tags, text would run together as a single block with no
        visual separation between distinct ideas.
      </p>

      {/* --- On your own: two personal paragraphs --- */}
      <p id="wd-p-your-1">
        I&apos;m Reha, an MS Computer Science student. This is my first personal
        paragraph for the paragraph-tags lab. {/* ← customize */}
      </p>
      <p id="wd-p-your-2">
        This is my second personal paragraph, sitting below the first with clear
        vertical spacing between them. {/* ← customize */}
      </p>

      {/* --- With AI: explanatory paragraph --- */}
      <p id="wd-ai-p">
        Wrapping text in a p element creates vertical spacing because browsers
        apply default top and bottom margins to block-level paragraphs, pushing
        adjacent content apart so each paragraph reads as its own unit.
      </p>
    </div>
  );
}
