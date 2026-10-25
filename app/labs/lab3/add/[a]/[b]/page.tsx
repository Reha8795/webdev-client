export default async function Add({ params }: { params: Promise<{ a: string; b: string }> }) {
  const { a, b } = await params;
  const sum = Number(a) + Number(b);
  return (
    <div id="wd-add-path" className="wd-content">
      <h2>Path Parameters — Add</h2>
      <p id="wd-add-result">
        {a} + {b} = {sum}
      </p>
    </div>
  );
}
