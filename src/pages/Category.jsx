import React, { useState, memo } from "react";

export default function Category() {
  const [count, setCount] = useState(0);
  return (
    <div className="container flex-col gap-10">
      <h1>React Memo example</h1>
      <ReactMemoExample />
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

const ReactMemoExample = memo(() => {
  console.log("Example component is Rendered");
  return <></>;
});
