export default function TextArea() {
  return (
    <div id="wd-text-area">
      <h5>Text Area</h5>
      <label>
        Comments
        <br />
        <textarea id="wd-textarea" rows={4} cols={30} defaultValue="Type multiple lines here..." />
      </label>
    </div>
  );
}
