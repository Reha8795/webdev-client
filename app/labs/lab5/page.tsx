const SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "https://webdev-server.onrender.com";
const SERVER_REPO = "https://github.com/Reha8795/webdev-server";

function Row({ title, href, label }: { title: string; href: string; label?: string }) {
  return (
    <div className="my-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <a className="text-sky-700 underline break-all" href={href}>{label || href}</a>
    </div>
  );
}

export default function Lab5() {
  return (
    <div id="wd-lab5" className="wd-content">
      <h2>Lab 5 — HTTP Servers</h2>
      <h3 id="wd-name">Reha Bhalchandra Jambavadekar</h3>
      <p>
        <a id="wd-github" href="https://github.com/Reha8795/webdev-client">webdev-client GitHub repository</a>
      </p>
      <p>
        <a id="wd-server-github" href={SERVER_REPO}>webdev-server GitHub repository</a>
      </p>
      <p>
        <a id="wd-server-link" href={SERVER}>Deployed server root</a>
      </p>
      <hr />

      <Row title="Welcome" href={`${SERVER}/lab5/welcome`} />
      <Row title="Add" href={`${SERVER}/lab5/add/12/30`} />
      <Row title="Subtract" href={`${SERVER}/lab5/subtract/30/12`} />
      <Row title="Multiply" href={`${SERVER}/lab5/multiply/6/7`} />
      <Row title="Divide" href={`${SERVER}/lab5/divide/42/6`} />
      <Row title="Calculator — Add" href={`${SERVER}/lab5/calculator?operation=add&a=12&b=30`} />
      <Row title="Calculator — Subtract" href={`${SERVER}/lab5/calculator?operation=subtract&a=30&b=12`} />
      <Row title="Calculator — Multiply" href={`${SERVER}/lab5/calculator?operation=multiply&a=6&b=7`} />
      <Row title="Calculator — Divide" href={`${SERVER}/lab5/calculator?operation=divide&a=42&b=6`} />
      <Row title="Assignment Object" href={`${SERVER}/lab5/assignment`} />
      <Row title="Assignment Title" href={`${SERVER}/lab5/assignment/title`} />
      <Row title="Module Object" href={`${SERVER}/lab5/module`} />
      <Row title="Module Name" href={`${SERVER}/lab5/module/name`} />
      <Row title="Todos Array" href={`${SERVER}/lab5/todos`} />
      <Row title="Todo by ID" href={`${SERVER}/lab5/todos/2`} />
      <Row title="Completed Todos" href={`${SERVER}/lab5/todos?completed=true`} />

      <h2 className="mt-4">Next.js Route Handlers</h2>
      <Row title="Route Handler — Hello" href="/api/lab5/hello" />
      <Row title="Route Handler — Calculator" href="/api/lab5/calculator?a=12&b=30&operation=add" />
    </div>
  );
}
