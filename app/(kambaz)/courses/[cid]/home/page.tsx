import Modules from "../modules/page";

export default function CourseHome() {
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }}>
              <Modules />
            </td>
            <td style={{ verticalAlign: "top", width: 300 }}>
              <div id="wd-course-status">
                <h3>Course Status</h3>
                <button type="button">Unpublish</button>{" "}
                <button type="button">Publish</button>
                <br />
                <button type="button">Import Existing Content</button><br />
                <button type="button">Import from Commons</button><br />
                <button type="button">Choose Home Page</button><br />
                <button type="button">View Course Stream</button><br />
                <button type="button">New Announcement</button><br />
                <button type="button">New Analytics</button><br />
                <button type="button">View Course Notifications</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
