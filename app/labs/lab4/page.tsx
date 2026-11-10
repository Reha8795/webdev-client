import Link from "next/link";
import Counters from "./Counters";
import BooleanState from "./BooleanState";
import StringState from "./StringState";
import DateState from "./DateState";
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";
import TodoLists from "./TodoLists";

export default function Lab4() {
  return (
    <div id="wd-lab4" className="wd-content">
      <h2>Lab 4 — Events, State, and Stores</h2>
      <h3 id="wd-name">Reha Bhalchandra Jambavadekar</h3>
      <p>
        <a id="wd-github" href="https://github.com/Reha8795/webdev-client">My webdev-client GitHub repository</a>
      </p>
      <hr />
      <Counters />
      <hr />
      <BooleanState />
      <hr />
      <StringState />
      <hr />
      <DateState />
      <hr />
      <ObjectState />
      <hr />
      <ArrayState />
      <hr />
      <TodoLists />
      <hr />

      <div id="wd-url-parameters">
        <h3 className="text-xl font-bold">Query and Path Parameters</h3>
        <h4 className="font-semibold">Query Parameters</h4>
        <p>
          <Link href="/labs/lab4/url-encoding/query-params?a=12&b=30">
            /labs/lab4/url-encoding/query-params?a=12&amp;b=30
          </Link>
        </p>
        <h4 className="font-semibold">Path Parameters</h4>
        <ul id="wd-path-links">
          <li><Link href="/labs/lab4/url-encoding/path-params/12/30">/labs/lab4/url-encoding/path-params/12/30</Link></li>
          <li><Link href="/labs/lab4/url-encoding/path-params/5/7">/labs/lab4/url-encoding/path-params/5/7</Link></li>
        </ul>
      </div>
    </div>
  );
}
