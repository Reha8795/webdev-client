"use client";
import { useState } from "react";
import { useTodosStore } from "./stores/todosStore";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addTodo, deleteTodo, updateTodo } from "./redux/todosSlice";

const btn = "border border-slate-400 rounded px-2 py-0.5 ml-1 hover:bg-slate-100 text-sm";
const addBtn = "bg-green-700 text-white rounded px-3 py-1 ml-2";
const inp = "border border-slate-400 rounded px-2 py-1";

function ZustandTodoList() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodosStore();
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  return (
    <div id="wd-zustand-todos">
      <h3 className="text-xl font-bold">Zustand Todo List</h3>
      <input className={inp} placeholder="New todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className={addBtn} onClick={() => { if (title.trim()) { addTodo(title); setTitle(""); } }}>Add</button>
      <ul className="list-none p-0 mt-2">
        {todos.map((t) => (
          <li key={t.id} className="py-0.5">
            {editId === t.id ? (
              <>
                <input className={inp} value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button className={btn} onClick={() => { updateTodo(t.id, editText); setEditId(null); }}>Save</button>
              </>
            ) : (
              <>
                {t.title}
                <button className={btn} onClick={() => { setEditId(t.id); setEditText(t.title); }}>Edit</button>
                <button className={btn} onClick={() => deleteTodo(t.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReduxTodoList() {
  const todos = useSelector((s: RootState) => s.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  return (
    <div id="wd-redux-todos">
      <h3 className="text-xl font-bold">Redux Todo List</h3>
      <input className={inp} placeholder="New todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className={addBtn} onClick={() => { if (title.trim()) { dispatch(addTodo(title)); setTitle(""); } }}>Add</button>
      <ul className="list-none p-0 mt-2">
        {todos.map((t) => (
          <li key={t.id} className="py-0.5">
            {editId === t.id ? (
              <>
                <input className={inp} value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button className={btn} onClick={() => { dispatch(updateTodo({ id: t.id, title: editText })); setEditId(null); }}>Save</button>
              </>
            ) : (
              <>
                {t.title}
                <button className={btn} onClick={() => { setEditId(t.id); setEditText(t.title); }}>Edit</button>
                <button className={btn} onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TodoLists() {
  return (<><ZustandTodoList /><ReduxTodoList /></>);
}
