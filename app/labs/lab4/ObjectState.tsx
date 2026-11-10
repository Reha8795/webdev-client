"use client";
import { useState } from "react";

export default function ObjectState() {
  const [person, setPerson] = useState({ name: "Reha", age: 24, city: "Boston" });
  const field = "border border-slate-400 rounded px-2 py-1 mx-1";
  return (
    <div id="wd-object-state">
      <h3 className="text-xl font-bold">Object State</h3>
      <pre id="wd-object-json">{JSON.stringify(person, null, 2)}</pre>
      <label>Name <input className={field} value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} /></label>
      <label>Age <input className={field} type="number" value={person.age} onChange={(e) => setPerson({ ...person, age: Number(e.target.value) })} /></label>
      <label>City <input id="wd-object-city" className={field} value={person.city} onChange={(e) => setPerson({ ...person, city: e.target.value })} /></label>
    </div>
  );
}
