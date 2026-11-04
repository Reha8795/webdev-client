export default function Backgrounds() {
  const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-teal-500", "bg-orange-500",
  ];
  return (
    <div id="wd-tw-backgrounds" className="mb-6">
      <h3 className="text-lg font-bold">Background Colors</h3>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {colors.map((c) => (
          <div key={c} className={`${c} text-white p-4 text-center rounded`}>{c}</div>
        ))}
      </div>
      <div className="mt-2">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 text-center rounded">
          gradient
        </div>
      </div>
    </div>
  );
}
