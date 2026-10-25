import todos from "./todos.json";

export default function TodoList() {
  return (
    <ul id="wd-todo-list" className="list-none p-0">
      {todos.map((t) => (
        <li key={t._id} className="wd-todo-item">
          <input type="checkbox" defaultChecked={t.done} /> {t.title}
        </li>
      ))}
    </ul>
  );
}
