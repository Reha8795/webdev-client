export default function Selectors() {
  return (
    <div>
      <h3>Selectors</h3>

      {/* style attribute first (§2.1.1) */}
      <p style={{ color: "white", backgroundColor: "purple", padding: 6 }}>
        Styled with the style attribute (inline).
      </p>

      {/* id selectors */}
      <div id="wd-css-id-selectors">
        <h4>ID Selectors</h4>
        <h5 id="wd-id-selector-1">Styled by #wd-id-selector-1 (red)</h5>
        <h5 id="wd-id-selector-2">Styled by #wd-id-selector-2 (blue)</h5>
      </div>

      {/* class selectors */}
      <div id="wd-css-class-selectors" className="wd-css-class-selectors">
        <h4>Class Selectors</h4>
        <span id="wd-class-selector" className="wd-class-selector wd-rounded-red">
          styled by .wd-class-selector
        </span>{" "}
        <span className="wd-class-selector wd-dimmed">also .wd-class-selector</span>
      </div>

      {/* document-structure selectors */}
      <div id="wd-css-document-structure">
        <h4>Document Structure Selectors</h4>
        <p id="wd-selector-1">Direct child paragraph (styled via &gt; p).</p>
        <ul>
          <li><a href="#">Descendant anchor (styled via li a)</a></li>
        </ul>
      </div>
    </div>
  );
}
