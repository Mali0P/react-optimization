import React, { lazy, Suspense, useState } from "react";
const About = lazy(() => import("./About"));
export default function Home() {
  const [load, loadFun] = useState(false);
  return (
    <div className="w-full h-full text-center py-10">
      <h1 className="font-bold text-4xl mb-10">
        Import About Page Using Lazy Loading
      </h1>
      <div >

{load?<Suspense fallback="Loading...."><About/></Suspense>:'This text will be replaced by the About component'}
      </div>
      <button className="mt-10 cursor-pointer bg-[black] text-white px-10 py-4 rounded-[50px] font-bold" onClick={()=>loadFun(!load)}>Load</button>
    </div>
  );
}
