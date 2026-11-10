"use client";
import { useState } from "react";

export default function ArrayState() {
  const [items, setItems] = useState<number[]>([1, 2, 3]);
  const btn = "border border-slate-400 rounded px-2 py-0.5 ml-2 hover:bg-slate-100";
  const addItem = () => setItems([...items, items.length ? Math.max(...items) + 1 : 1]);
  const deleteItem = (n: number) => setItems(items.filter((x) => x !== n));
  return (
    <div id="wd-array-state">
      <h3 className="text-xl font-bold">Array State</h3>
      <button className="bg-green-700 text-white rounded px-3 py-1" onClick={addItem}>Add Item</button>
      <ul id="wd-array-list" className="list-none p-0 mt-2">
        {items.map((n) => (
          <li key={n} className="py-0.5">
            Item {n}
            <button className={btn} onClick={() => deleteItem(n)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
