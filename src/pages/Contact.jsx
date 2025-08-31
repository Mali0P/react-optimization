import React, { memo, useCallback, useState } from "react";

export default function Contact() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

const decrement = useCallback(() => {
  setCount(prev => (prev !== 0 ? prev - 1 : 0));
}, []);


  return (
    <div className="container flex flex-col gap-8">
      <h1>useCallback</h1>
      <p>{count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering Button : ${children}`);
  return (
    <button
      onClick={onClick}
      className={`text-white px-8 py-4 cursor-pointer text-sm ${
        children === "Increment" ? "bg-[green]" : "bg-[red]"
      }`}
    >
      {children}
    </button>
  );
});
