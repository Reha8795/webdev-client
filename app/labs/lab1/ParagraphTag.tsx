export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        The paragraph element wraps a block of text and browsers add vertical
        spacing above and below it, separating one paragraph from the next.
      </p>
      <p id="wd-p-2">
        Without paragraph tags, text would run together as a single block with no
        visual separation between distinct ideas.
      </p>

      <p id="wd-p-your-1">
        I&apos;m Reha, an MS Computer Science student. This is my first personal
        paragraph for the paragraph-tags lab.
      </p>
      <p id="wd-p-your-2">
        This is my second personal paragraph, sitting below the first with clear
        vertical spacing between them.
      </p>

      <p id="wd-ai-p">
        Wrapping text in a p element creates vertical spacing because browsers
        apply default top and bottom margins to block-level paragraphs, pushing
        adjacent content apart so each paragraph reads as its own unit.
      </p>
    </div>
  );
}
