"use client";
import { useState } from "react";

export default function StringState() {
  const [text, setText] = useState("Hello");
  return (
    <div id="wd-string-state">
      <h3 className="text-xl font-bold">String State</h3>
      <input className="border border-slate-400 rounded px-2 py-1" value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
}
