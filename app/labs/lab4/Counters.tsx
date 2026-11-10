"use client";
import { useState } from "react";
import { useCounterStore } from "./stores/counterStore";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement } from "./redux/counterSlice";

const btn = "border border-slate-400 rounded px-2 py-0.5 mx-1 hover:bg-slate-100";

function UseStateCounter() {
  const [count, setCount] = useState(5);
  return (
    <div id="wd-usestate-counter" className="my-2">
      <h4 className="inline font-semibold">useState Counter: {count}</h4>
      <button className={btn} onClick={() => setCount(count + 1)}>Up</button>
      <button className={btn} onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}

function Child({ count, setCount }: { count: number; setCount: (n: number) => void }) {
  return (
    <>
      <button className={btn} onClick={() => setCount(count + 1)}>Up</button>
      <button className={btn} onClick={() => setCount(count - 1)}>Down</button>
    </>
  );
}
function ParentChildCounter() {
  const [count, setCount] = useState(3);
  return (
    <div id="wd-parent-child-counter" className="my-2">
      <h4 className="inline font-semibold">Parent/Child Counter: {count}</h4>
      <Child count={count} setCount={setCount} />
    </div>
  );
}

function ZustandCounter() {
  const { count, inc, dec } = useCounterStore();
  return (
    <div id="wd-zustand-counter" className="my-2">
      <h4 className="inline font-semibold">Zustand Counter: {count}</h4>
      <button className={btn} onClick={inc}>Up</button>
      <button className={btn} onClick={dec}>Down</button>
    </div>
  );
}

function ReduxCounter() {
  const count = useSelector((s: RootState) => s.counter.value);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-counter" className="my-2">
      <h4 className="inline font-semibold">Redux Counter: {count}</h4>
      <button className={btn} onClick={() => dispatch(increment())}>Up</button>
      <button className={btn} onClick={() => dispatch(decrement())}>Down</button>
    </div>
  );
}

export default function Counters() {
  return (
    <div id="wd-counters">
      <h3 className="text-xl font-bold">Counters</h3>
      <UseStateCounter />
      <ParentChildCounter />
      <ZustandCounter />
      <ReduxCounter />
    </div>
  );
}
