export default function Spacing() {
  return (
    <div id="wd-tw-spacing" className="mb-6">
      <h3 className="text-lg font-bold">Spacing</h3>

      <h4 className="font-semibold mt-2">Padding</h4>
      <div className="flex gap-2 items-start">
        <div className="p-2 bg-sky-300">p-2</div>
        <div className="p-4 bg-sky-300">p-4</div>
        <div className="p-8 bg-sky-300">p-8</div>
        <div className="px-6 py-2 bg-sky-400 text-white">px-6 py-2</div>
      </div>

      <h4 className="font-semibold mt-4">Margin</h4>
      <div className="bg-slate-100 inline-block">
        <div className="m-2 bg-emerald-300 inline-block">m-2</div>
        <div className="m-6 bg-emerald-300 inline-block">m-6</div>
        <div className="ms-4 me-4 bg-emerald-400 text-white inline-block">ms-4 me-4</div>
      </div>
    </div>
  );
}
