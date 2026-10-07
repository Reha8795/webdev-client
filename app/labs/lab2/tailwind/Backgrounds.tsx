export default function Backgrounds() {
  return (
    <div id="wd-tw-backgrounds" className="mb-6">
      <h3 className="text-lg font-bold">Backgrounds</h3>
      <div className="flex gap-2">
        <div className="w-24 h-16 bg-rose-500 text-white p-2 rounded">solid</div>
        <div className="w-24 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded">gradient</div>
        <div className="w-24 h-16 bg-amber-200 border border-amber-500 p-2 rounded">tint</div>
      </div>
    </div>
  );
}
