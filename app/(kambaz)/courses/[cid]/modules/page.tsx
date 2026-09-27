export default function Modules() {
  return (
    <div id="wd-modules">
      <h3 id="wd-modules-title">Modules</h3>
      <ul className="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1 — HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is HTML</li>
                <li className="wd-content-item">Set up development environment</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer — Chapter 1</li>
                <li className="wd-content-item">Full Stack Developer — Chapter 2</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2 — CSS</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn to style HTML with CSS</li>
                <li className="wd-content-item">Flexbox and Grid</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
