export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Tables</h4>

      {/* --- Book sample: quiz grades, extended to Q1–Q10 (With AI) --- */}
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Q1</td><td>90</td></tr>
          <tr><td>Q2</td><td>85</td></tr>
          <tr><td>Q3</td><td>95</td></tr>
          {/* With AI: Q4–Q10 */}
          <tr><td>Q4</td><td>88</td></tr>
          <tr><td>Q5</td><td>92</td></tr>
          <tr><td>Q6</td><td>79</td></tr>
          <tr><td>Q7</td><td>84</td></tr>
          <tr><td>Q8</td><td>91</td></tr>
          <tr><td>Q9</td><td>87</td></tr>
          <tr><td>Q10</td><td>93</td></tr>
        </tbody>
        <tfoot>
          <tr>
            {/* Average of all ten scores = 88.4 */}
            <th>Average</th>
            <th>88.4</th>
          </tr>
        </tfoot>
      </table>

      {/* --- On your own: second personal table --- */}
      <h5>My Fall 2026 Courses</h5>
      <table id="wd-your-table" border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Course</th>
            <th>Credits</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CS 5200 Database Management</td><td>4</td><td>TA</td></tr>
          <tr><td>Web Development</td><td>4</td><td>Student</td></tr>
          <tr><td>Elective</td><td>4</td><td>Student</td></tr>
        </tbody>
      </table>
    </div>
  );
}
