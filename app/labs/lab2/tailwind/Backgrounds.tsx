export default function Backgrounds() {
  return (
    <div id="wd-tw-backgrounds" className="mb-6">
      <h3 className="text-lg font-bold">Backgrounds</h3>
      <div className="flex gap-2">
        <div className="w-24 h-16 bg-red-500 text-white p-2 rounded">bg-red-500</div>
        <div className="w-24 h-16 bg-blue-500 text-white p-2 rounded">bg-blue-500</div>
        <div className="w-24 h-16 bg-green-500 text-white p-2 rounded">bg-green-500</div>
        <div className="w-24 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded">gradient</div>
      </div>
    </div>
  );
}
