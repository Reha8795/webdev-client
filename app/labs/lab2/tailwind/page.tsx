import Spacing from "./Spacing";
import Typography from "./Typography";
import Backgrounds from "./Backgrounds";
import Responsive from "./Responsive";
import Filters from "./Filters";
import GridSystem from "./GridSystem";

export default function TailwindSamples() {
  return (
    <div id="wd-tailwind" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lab 2 — Tailwind Samples</h2>
      <Spacing />
      <Typography />
      <Backgrounds />
      <Responsive />
      <Filters />
      <GridSystem />
    </div>
  );
}
