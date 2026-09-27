export default function TextFields() {
  return (
    <div id="wd-text-fields">
      <h5>Text Fields</h5>
      <label>
        Username{" "}
        <input id="wd-text-fields-username" placeholder="Enter username" defaultValue="alice" />
      </label>
      <br />
      <label>
        Email{" "}
        <input id="wd-text-fields-email" type="email" placeholder="you@example.com" />
      </label>
      <br />
      <label>
        Password <input type="password" defaultValue="secret" />
      </label>
    </div>
  );
}
