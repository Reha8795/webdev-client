const people = [
  { name: "Reha Jambavadekar", login: "reha", role: "STUDENT", section: "S101", last: "2 days ago", total: "10:21:32" },
  { name: "Alice Wonderland", login: "alice", role: "STUDENT", section: "S101", last: "5 days ago", total: "08:12:05" },
  { name: "Bob Builder", login: "bob", role: "TA", section: "S102", last: "1 day ago", total: "20:44:10" },
];

export default function People() {
  return (
    <div id="wd-people">
      <h3 className="text-xl font-bold mb-3">People</h3>
      <table id="wd-people-table" className="w-full border-collapse">
        <thead>
          <tr className="text-left text-slate-500 border-b-2 border-slate-200">
            <th className="py-2">Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.login} className="wd-person border-b border-slate-100 hover:bg-slate-50">
              <td className="py-2 font-medium text-sky-700">{p.name}</td>
              <td>{p.login}</td>
              <td>{p.section}</td>
              <td>{p.role}</td>
              <td>{p.last}</td>
              <td>{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
