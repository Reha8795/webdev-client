import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1" className="wd-content">
      <h2>Lab 1 — HTML Components</h2>

      {/* Full Canvas name + section (§1.7) — must match the roster exactly */}
      <h3 id="wd-name">Reha Jambavadekar</h3>
      <h4>Section: CS 5610-09 (CRN 21441)</h4>

      {/* GitHub link (§1.5) — required on Labs */}
      <p>
        <a id="wd-github" href="https://github.com/Reha8795/webdev-client">
          My webdev-client GitHub repository
        </a>
      </p>

      <hr />
      <HeadingTags />
      <hr />
      <ParagraphTag />
      <hr />
      <ListTags />
      <hr />
      <Tables />
      <hr />
      <Images />
      <hr />
      <Forms />
      <hr />

      <div id="wd-highlighted-paragraphs">
        <h4>Highlighted Paragraphs</h4>
        {/* On your own: your text and colors */}
        <HighlightedParagraph
          text="This is my highlighted paragraph in my colors."
          color="white"
          backgroundColor="darkgreen"
        />
        {/* With AI: a different sample (not your personal sentence) */}
        <HighlightedParagraph
          text="Sample highlighted paragraph with different colors."
          color="black"
          backgroundColor="lightpink"
        />
        <HighlightedParagraph text="Default yellow highlight variation." />
      </div>
      <hr />

      <div id="wd-highlighted-boxes">
        <h4>Highlighted Boxes</h4>
        {/* On your own: wrap your goals list */}
        <HighlightedBox color="white" backgroundColor="#334155">
          <h5>My Goals</h5>
          <ul>
            <li>Land a Data / SDE co-op</li>
            <li>Ship this web dev course with A grades</li>
            <li>Contribute to open source</li>
          </ul>
        </HighlightedBox>
        {/* With AI: sample nested tags (not your goals list) */}
        <HighlightedBox backgroundColor="#fef9c3">
          <h5>Sample Nested Content</h5>
          <p>
            A box can hold <strong>nested</strong> tags like{" "}
            <em>emphasis</em> and even a list:
          </p>
          <ul>
            <li>a list item</li>
            <li>another list item</li>
          </ul>
        </HighlightedBox>
      </div>
      <hr />

      <AnchorTag />
    </div>
  );
}
