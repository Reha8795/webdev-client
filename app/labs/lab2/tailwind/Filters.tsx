export default function Filters() {
  return (
    <div id="wd-tw-filters" className="mb-6">
      <h3 className="text-lg font-bold">Filters</h3>
      <div className="flex gap-3">
        <div className="w-20 h-20 bg-indigo-500 blur" />
        <div className="w-20 h-20 bg-indigo-500 grayscale" />
        <div className="w-20 h-20 bg-indigo-500 opacity-50" />
        <div className="w-20 h-20 bg-indigo-500 brightness-50" />
      </div>
    </div>
  );
}
