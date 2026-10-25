import "./lab3.css";
import Link from "next/link";
import Add from "./Add";
import ClientPathname from "./ClientPathname";
import ServerInfo from "./ServerInfo";
import TodoList from "./TodoList";

export default function Lab3() {
  const hour = 9;
  const loggedIn = false;
  const nullValue = null;
  const house = {
    bedrooms: 3,
    bathrooms: 2,
    owners: ["Reha", "Smit"],
  } as { bedrooms: number; bathrooms: number; owners: string[]; garage?: { cars: number } };
  const person = {
    name: "Reha",
    roles: ["student", "TA"],
    address: { city: "Boston", state: "MA" },
  };
  const bgGreen = { backgroundColor: "green", color: "white", padding: 16, margin: 4, display: "inline-block", width: 110, textAlign: "center" as const, borderRadius: 6 };

  return (
    <div id="wd-lab3" className="wd-content">
      <h2>Lab 3 — JavaScript and Data-Driven UI</h2>
      <h3 id="wd-name">Reha Bhalchandra Jambavadekar</h3>
      <p>
        <a id="wd-github" href="https://github.com/Reha8795/webdev-client">My webdev-client GitHub repository</a>
      </p>
      <hr />

      <h3>Variables</h3>
      <p>{`let and const declare block-scoped variables.`}</p>
      <hr />

      <h3>Template Literals</h3>
      <p>{`Hello, ${person.name}! You have ${person.roles.length} roles.`}</p>
      <hr />

      <h3>Functions</h3>
      <p>Arrow function (x) =&gt; x * 2 applied to 21 = {((x: number) => x * 2)(21)}</p>
      <hr />

      <h3>If Else</h3>
      <p>{5 > 1 ? "true1" : "false1"}</p>
      <p>{5 < 1 ? "true2" : "false1"}</p>
      <p>{`not ${5 < 1 ? "true2" : "false1"}`}</p>
      <hr />

      <h3>Ternary</h3>
      <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
      <hr />

      <h3>Inline Conditional</h3>
      <p>{loggedIn ? "Welcome back" : "Guest"}</p>
      <p>{!loggedIn && "Guest Inline"}</p>
      <hr />

      <h3>Nullish Coalescing</h3>
      <p>nullValue ?? &quot;default&quot; = {nullValue ?? "default"}</p>
      <hr />

      <h3>Arrays</h3>
      <p>roles = [{person.roles.join(", ")}]</p>
      <hr />

      <h3>Array map</h3>
      <ul>{person.roles.map((r) => (<li key={r}>{r.toUpperCase()}</li>))}</ul>
      <hr />

      <h3>Array filter</h3>
      <p>{[1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0).join(", ")}</p>
      <hr />

      <h3>Array find</h3>
      <p>{[10, 20, 30].find((n) => n > 15)}</p>
      <hr />

      <h3>Array reduce</h3>
      <p>sum = {[1, 2, 3, 4].reduce((a, n) => a + n, 0)}</p>
      <hr />

      <h3>Objects</h3>
      <p>City: {person.address.city}, {person.address.state}</p>
      <hr />

      <h3>Destructuring</h3>
      {(() => { const { name, address: { city } } = person; return <p>{name} lives in {city}</p>; })()}
      <hr />

      <h3>Spread</h3>
      <p>{JSON.stringify([...person.roles, "developer"])}</p>
      <hr />

      <h3>JSON.stringify</h3>
      <pre id="wd-json-stringify">{JSON.stringify(person, null, 2)}</pre>
      <hr />

      <h3>House</h3>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <h5>owners</h5>
      <p>{house.owners.join(", ")}</p>
      <hr />

      <h3>Optional Chaining</h3>
      <p>house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}</p>
      <hr />

      <h3>Import Styles</h3>
      <table id="wd-imports-table" border={1} cellPadding={6}>
        <thead>
          <tr><th>Default Object</th><th>Namespace</th><th>Named Functions</th></tr>
        </thead>
        <tbody>
          <tr><td>import lib</td><td>import * as lib</td><td>{`import { add }`}</td></tr>
          <tr><td>lib.add(2,3)</td><td>lib.add(2,3)</td><td>add(2,3)</td></tr>
          <tr><td>5</td><td>5</td><td>5</td></tr>
          <tr><td>lib.PI</td><td>lib.PI</td><td>PI</td></tr>
          <tr><td>30</td><td>30</td><td>30</td></tr>
        </tbody>
      </table>
      <p>add(10, 20) = 30</p>
      <hr />

      <h3>Style Objects</h3>
      <div id="wd-style-objects">
        <div style={{ backgroundColor: "red", color: "white", padding: 16, margin: 4, display: "inline-block", width: 110, textAlign: "center", borderRadius: 6 }}>red</div>
        <div style={{ backgroundColor: "blue", color: "white", padding: 16, margin: 4, display: "inline-block", width: 110, textAlign: "center", borderRadius: 6 }}>blue</div>
        <div style={{ backgroundColor: "orange", color: "white", padding: 16, margin: 4, display: "inline-block", width: 110, textAlign: "center", borderRadius: 6 }}>orange</div>
        <div style={bgGreen}>green</div>
      </div>
      <hr />

      <h3>CSS Classes</h3>
      <div id="wd-css-classes">
        <div className="wd-bg-box wd-box-red">red</div>
        <div className="wd-bg-box wd-box-blue">blue</div>
        <div className="wd-bg-box wd-box-green">green</div>
        <div className="wd-bg-box wd-box-purple">purple</div>
        <div className="wd-bg-box wd-box-orange">orange</div>
        <div className={`wd-bg-box ${house.bedrooms > 2 ? "wd-box-teal" : "wd-box-red"}`}>six</div>
      </div>
      <hr />

      <h3>Client Component</h3>
      <ClientPathname />
      <hr />

      <h3>Server Component</h3>
      <ServerInfo />
      <hr />

      <h3>Add Component</h3>
      <Add a={2} b={3} />
      <Add a={10} b={20} />
      <hr />

      <h3>Path Parameters</h3>
      <ul id="wd-path-parameters">
        <li><Link href="/labs/lab3/add/12/30">/labs/lab3/add/12/30</Link></li>
        <li><Link href="/labs/lab3/add/5/7">/labs/lab3/add/5/7</Link></li>
        <li><Link href="/labs/lab3/add/100/1">/labs/lab3/add/100/1</Link></li>
      </ul>
      <hr />

      <h3>Todo List</h3>
      <TodoList />
    </div>
  );
}
