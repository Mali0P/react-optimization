import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
