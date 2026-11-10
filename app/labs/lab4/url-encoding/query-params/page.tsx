export default async function QueryParams({ searchParams }: { searchParams: Promise<{ a?: string; b?: string }> }) {
  const { a = "0", b = "0" } = await searchParams;
  return (
    <div id="wd-query-params" className="wd-content">
      <h2>Query Parameters</h2>
      <p id="wd-query-result">{a} + {b} = {Number(a) + Number(b)}</p>
    </div>
  );
}
