export default function OtherInputTypes() {
  return (
    <div id="wd-other-input-types">
      <h5>Other Input Types</h5>
      <label>Date <input type="date" /></label><br />
      <label>Time <input type="time" /></label><br />
      <label>Color <input type="color" /></label><br />
      <label>Number <input type="number" defaultValue={5} /></label><br />
      <label>Range <input type="range" /></label><br />
      <label>File <input type="file" /></label>
    </div>
  );
}
