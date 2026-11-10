"use client";
import { useState } from "react";

export default function DateState() {
  const [date, setDate] = useState("2026-11-10");
  return (
    <div id="wd-date-state">
      <h3 className="text-xl font-bold">Date State</h3>
      <input type="date" className="border border-slate-400 rounded px-2 py-1" value={date} onChange={(e) => setDate(e.target.value)} />
      <p>Selected date: {date}</p>
    </div>
  );
}
