import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 60, fontFamily: "sans-serif" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>−</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}