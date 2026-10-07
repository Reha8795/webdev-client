import "./index.css";
import Link from "next/link";
import Selectors from "./Selectors";
import ColorBorderBox from "./ColorBorderBox";
import PositionFloatFlex from "./PositionFloatFlex";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2" className="wd-content">
      <h2>Lab 2 — CSS, Icons, and Tailwind</h2>
      <h3 id="wd-name">Reha Bhalchandra Jambavadekar</h3>

      <p>
        <Link href="/labs/lab2/tailwind">→ Tailwind samples page</Link>
      </p>
      <hr />
      <Selectors />
      <hr />
      <ColorBorderBox />
      <hr />
      <PositionFloatFlex />
      <hr />
      <ReactIconsSampler />
    </div>
  );
}
