export default function GridSystem() {
  return (
    <div id="wd-tailwind-grid-system" className="mb-6">
      <h3 className="text-lg font-bold">Grid System</h3>

      <h4 className="font-semibold mt-2">4 Columns</h4>
      <div className="grid grid-cols-4 gap-2 mt-2">
        <div className="text-center bg-blue-300 p-3">01</div>
        <div className="text-center bg-blue-300 p-3">02</div>
        <div className="text-center bg-blue-300 p-3">03</div>
        <div className="text-center bg-blue-300 p-3">04</div>
      </div>

      <h4 className="font-semibold mt-4">Columns that span (12-column grid)</h4>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-4 bg-yellow-500 p-3">
          <h3 className="text-lg font-bold">One third</h3>
        </div>
        <div className="col-span-8 bg-green-500 text-white p-3">
          <h3 className="text-lg font-bold">Two thirds</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-2 text-center bg-blue-300 p-3">span 2</div>
        <div className="col-span-4 text-center bg-blue-400 p-3">span 4</div>
        <div className="col-span-6 text-center bg-blue-500 text-white p-3">span 6</div>
      </div>
    </div>
  );
}
