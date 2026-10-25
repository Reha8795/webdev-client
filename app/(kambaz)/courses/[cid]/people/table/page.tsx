import { users, enrollments } from "../../../../database";

export default async function PeopleTable({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const enrolledIds = enrollments.filter((e) => e.course === cid).map((e) => e.user);
  const roster = users.filter((u) => enrolledIds.includes(u._id));
  return (
    <div id="wd-people-table">
      <h3 className="text-xl font-bold mb-3">People</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-slate-500 border-b-2 border-slate-200">
            <th className="py-2">Name</th><th>Login ID</th><th>Role</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((u) => (
            <tr key={u._id} className="wd-person border-b border-slate-100 hover:bg-slate-50">
              <td className="py-2 font-medium text-sky-700">{u.firstName} {u.lastName}</td>
              <td>{u.username}</td><td>{u.role}</td><td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
