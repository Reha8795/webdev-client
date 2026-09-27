export default function RadioButtons() {
  return (
    <div id="wd-radio-buttons">
      <h5>Radio Buttons</h5>
      <label><input type="radio" name="genre" defaultChecked /> Rock</label><br />
      <label><input type="radio" name="genre" /> Pop</label><br />
      <label><input type="radio" name="genre" /> Jazz</label>
    </div>
  );
}
