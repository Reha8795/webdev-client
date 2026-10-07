export default function ColorBorderBox() {
  return (
    <div>
      <h3>Color, Border, and Box Model</h3>

      <div id="wd-css-colors">
        <h4>Color &amp; Background</h4>
        <span className="wd-fg-color-red">red text</span>{" "}
        <span className="wd-bg-color-yellow">yellow background</span>
      </div>

      <div id="wd-css-borders">
        <h4>Borders</h4>
        <div className="wd-border-red wd-padding-10">solid red border</div>
        <div className="wd-border-dashed wd-padding-10">dashed green border</div>
      </div>

      <div id="wd-css-padding">
        <h4>Padding</h4>
        <div className="wd-bordered-box wd-padding-10">padding 10px</div>
      </div>

      <div id="wd-css-margins">
        <h4>Margin</h4>
        <div className="wd-bordered-box wd-margin-10">margin 10px</div>
      </div>

      <div id="wd-box-model">
        <h4>Box Model</h4>
        <div className="wd-bordered-box wd-padding-10 wd-margin-10">
          content + padding + border + margin
        </div>
      </div>

      <div id="wd-css-corners">
        <h4>Rounded Corners</h4>
        <div className="wd-rounded-corners">rounded corners</div>
      </div>

      <div id="wd-css-dimensions">
        <h4>Dimensions</h4>
        <div className="wd-dimensions">200 x 80</div>
      </div>

      <div id="wd-css-display">
        <h4>Display</h4>
        <span className="wd-display-block wd-bordered-box">display block</span>
        <span className="wd-display-inline">inline a</span>
        <span className="wd-display-inline">inline b</span>
        <span className="wd-display-none">hidden</span>
      </div>
    </div>
  );
}
