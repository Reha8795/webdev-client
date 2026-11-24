export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const a = Number(searchParams.get("a") ?? 0);
  const b = Number(searchParams.get("b") ?? 0);
  const operation = searchParams.get("operation") ?? "add";
  let result: number;
  switch (operation) {
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide": result = a / b; break;
    case "add":
    default: result = a + b; break;
  }
  return Response.json({ a, b, operation, result });
}
