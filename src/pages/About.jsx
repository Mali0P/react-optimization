import React, { useMemo, useState } from "react";

export default function About() {
  const [count,setCount] = useState(1)
  const [otherState, setOtherState] = useState(false);
  function complex (num) {
    console.log("Inside Expensive Task")
    for(let i=0;i<1000000000;i++){}
       return num+2;
  }
  const fetchFunction = useMemo(()=>complex(count),[count])

  return <div className="container flex flex-col justify-center items-center">
<h1>About / useMemo</h1>
<div>
  <p>{count}</p>
  <button onClick={()=>setCount(count+1)} className="cursor-pointer">Increase Count</button>
</div>
<div>
{fetchFunction}
</div>
<button onClick={()=>setOtherState(!otherState)} className="cursor-pointer">Toogle {otherState?'True':'False'}</button>
  </div>;
}
