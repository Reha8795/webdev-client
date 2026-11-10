"use client";
import { useState } from "react";

export default function BooleanState() {
  const [checked, setChecked] = useState(false);
  return (
    <div id="wd-boolean-state">
      <h3 className="text-xl font-bold">Boolean State</h3>
      <label>
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> Done
      </label>
      <p>Checked: {checked ? "true" : "false"}</p>
    </div>
  );
}
