export default function AnchorTag() {
  return (
    <div id="wd-anchor-tag">
      <h4>Anchor Tag</h4>

      {/* --- Book sample: lipsum + GitHub anchors --- */}
      <p>
        Anchor tags create hyperlinks. For example, here is some{" "}
        <a href="https://www.lipsum.com/">Lorem Ipsum</a> and here is{" "}
        <a href="https://github.com/">GitHub</a>.
      </p>

      {/* --- On your own: personal anchors --- */}
      <p>
        <a id="wd-your-link" href="https://www.northeastern.edu/">
          My favorite site (Northeastern)
        </a>
      </p>
      <p>
        {/* ← replace with YOUR GitHub profile/repo */}
        <a id="wd-your-github" href="https://github.com/Reha8795">
          My GitHub
        </a>
      </p>

      {/* --- With AI: sample docs link --- */}
      <p>
        <a
          id="wd-ai-link"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        >
          MDN: the table element
        </a>
      </p>
    </div>
  );
}
