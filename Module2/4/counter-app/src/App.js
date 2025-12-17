import { useState } from "react";

/* =========================
   Custom Hook useIncrement
   ========================= */
function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + addAmount);
  }

  return [count, increase];
}

/* =========================
   Component Counter 1
   ========================= */
function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

/* =========================
   Component Counter 2
   ========================= */
function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h3>Counter 2</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

/* =========================
   Component App
   ========================= */
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter App</h2>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
