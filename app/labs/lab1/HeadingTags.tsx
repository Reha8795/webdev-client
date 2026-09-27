export default function HeadingTags() {
  return (
    <div id="wd-heading-tags">
      <h4>Heading Tags</h4>
      <p>
        Web pages display several types of headings that vary in size and weight.
        HTML provides six levels of headings from h1 (largest) to h6 (smallest).
      </p>

      {/* Practice h1–h6 (canonical id wd-h-tag) */}
      <div id="wd-h-tag">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      <h2 id="wd-your-heading">
        Reha&apos;s Heading{" "}
        <span id="wd-your-span">(and this is my personal span)</span>
      </h2>

      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <h5>What I built</h5>
        <h6>Next step</h6>
      </div>
    </div>
  );
}
