import { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-10 cursor-pointer">
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Restar
      </button>
      <div className="text-center">
        <p>Llevas: {count}</p>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {" "}
        Sumar{" "}
      </button>
    </div>
  );
}
