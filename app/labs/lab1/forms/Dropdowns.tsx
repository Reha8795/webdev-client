export default function Dropdowns() {
  return (
    <div id="wd-dropdowns">
      <h5>Dropdowns</h5>
      <label>
        Favorite language{" "}
        <select defaultValue="TS">
          <option value="JS">JavaScript</option>
          <option value="TS">TypeScript</option>
          <option value="PY">Python</option>
        </select>
      </label>
      <br />
      <label>
        Select multiple{" "}
        <select multiple>
          <option>Reading</option>
          <option>Coding</option>
          <option>Traveling</option>
        </select>
      </label>
    </div>
  );
}
