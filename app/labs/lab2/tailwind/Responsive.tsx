export default function Responsive() {
  return (
    <div id="wd-tw-responsive" className="mb-6">
      <h3 className="text-lg font-bold">Responsive Prefixes</h3>
      <div className="p-3 text-white bg-green-500 sm:bg-blue-500 md:bg-purple-500 lg:bg-red-500">
        base green → sm:bg-blue-500 → md:bg-purple-500 → lg:bg-red-500 (resize)
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">responsive text size</p>
    </div>
  );
}
