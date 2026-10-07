export default function Spacing() {
  return (
    <div id="wd-tw-spacing" className="mb-6">
      <h3 className="text-lg font-bold">Spacing</h3>
      <div className="flex gap-2">
        <div className="p-2 bg-sky-200">p-2</div>
        <div className="p-4 bg-sky-300">p-4</div>
        <div className="p-6 bg-sky-400">p-6</div>
      </div>
      <div className="mt-4 mb-4 ms-4 me-4 m-4 px-4 py-4 bg-emerald-200 inline-block">
        ms-4 me-4 mt-4 mb-4 p-4
      </div>
    </div>
  );
}
