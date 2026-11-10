export default async function PathParams({ params }: { params: Promise<{ a: string; b: string }> }) {
  const { a, b } = await params;
  return (
    <div id="wd-path-params" className="wd-content">
      <h2>Path Parameters</h2>
      <p id="wd-path-result">{a} + {b} = {Number(a) + Number(b)}</p>
    </div>
  );
}
