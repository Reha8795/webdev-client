import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea id="wd-description" rows={8} cols={50} defaultValue={
        "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      } />
      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" type="number" defaultValue={100} /></td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="ON_PAPER">On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-assign-to">Assign to</label></td>
            <td><input id="wd-assign-to" defaultValue="Everyone" /></td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-due-date">Due</label></td>
            <td><input id="wd-due-date" type="date" defaultValue="2026-05-13" /></td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-available-from">Available from</label></td>
            <td><input id="wd-available-from" type="date" defaultValue="2026-05-06" /></td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-available-until">Until</label></td>
            <td><input id="wd-available-until" type="date" defaultValue="2026-05-20" /></td>
          </tr>
        </tbody>
      </table>

      <br />
      <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
        <button type="button">Cancel</button>
      </Link>{" "}
      <Link id="wd-save" href={`/courses/${cid}/assignments`}>
        <button type="button">Save</button>
      </Link>
    </div>
  );
}
