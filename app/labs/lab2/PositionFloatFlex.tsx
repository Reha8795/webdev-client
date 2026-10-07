export default function PositionFloatFlex() {
  return (
    <div>
      <h3>Position, Float, Grid, Flex, and Media Queries</h3>

      <div id="wd-css-positions">
        <h4>Positions</h4>
        <div className="wd-pos-container">
          <div className="wd-relative">relative</div>
          <div className="wd-absolute">absolute</div>
        </div>
      </div>

      <div id="wd-css-z-index">
        <h4>Z-Index</h4>
        <div className="wd-z-container">
          <div className="wd-z-1">z-1</div>
          <div className="wd-z-2">z-2</div>
        </div>
      </div>

      <div id="wd-css-float">
        <h4>Float</h4>
        <div className="wd-float-left">float left</div>
        <p>Text wraps around the floated box to its right. Lorem ipsum dolor sit amet.</p>
      </div>

      <div id="wd-css-grid">
        <h4>Grid</h4>
        <div className="wd-grid">
          <div>1</div><div>2</div><div>3</div>
          <div>4</div><div>5</div><div>6</div>
        </div>
      </div>

      <div id="wd-css-flex">
        <h4>Flex</h4>
        <div className="wd-flex">
          <div>A</div><div>B</div><div>C</div>
        </div>
      </div>

      <div id="wd-media-queries-demo">
        <h4>Media Queries</h4>
        <div className="wd-media-box">
          Blue above 600px, orange at/below 600px — resize the window.
        </div>
      </div>
    </div>
  );
}
