// Single canonical Student Profile form (§1.3.6).
// This ONE file serves both "On your own" and "With AI" rows.
// id MUST stay wd-your-form. Do not create a second form file or a new id.
export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h5>Student Profile</h5>

      {/* Text */}
      <label>
        Full name{" "}
        <input type="text" defaultValue="Reha Jambavadekar" />
      </label>
      <br />

      {/* Email */}
      <label>
        Email{" "}
        <input type="email" defaultValue="jambavadekar.r@northeastern.edu" />
      </label>
      <br />

      {/* Password */}
      <label>
        Password <input type="password" defaultValue="myPassword" />
      </label>
      <br />

      {/* Textarea */}
      <label>
        Bio
        <br />
        <textarea
          rows={3}
          cols={30}
          defaultValue="MS Computer Science student at Northeastern."
        />
      </label>
      <br />

      {/* Radio */}
      <fieldset>
        <legend>Program</legend>
        <label><input type="radio" name="program" defaultChecked /> Masters</label>{" "}
        <label><input type="radio" name="program" /> PhD</label>
      </fieldset>

      {/* Checkbox */}
      <label>
        <input type="checkbox" defaultChecked /> Available for co-op
      </label>
      <br />

      {/* Dropdown */}
      <label>
        Campus{" "}
        <select defaultValue="Boston">
          <option>Boston</option>
          <option>Seattle</option>
          <option>San Jose</option>
        </select>
      </label>
      <br />

      {/* Other input type */}
      <label>Start date <input type="date" defaultValue="2025-09-01" /></label>
      <br />

      {/* Buttons */}
      <button type="submit">Save</button>{" "}
      <button type="button">Cancel</button>
    </form>
  );
}
