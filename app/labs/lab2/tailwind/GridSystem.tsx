export default function GridSystem() {
  return (
    <div id="wd-tailwind-grid-system" className="mb-6">
      <h3 className="text-lg font-bold">Grid System</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-teal-200 p-4 text-center rounded">col {i + 1}</div>
        ))}
      </div>
    </div>
  );
}
