import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[black] text-white px-8 py-5 flex justify-between items-center">
      <div className="text-4xl">Logo</div>
      <ul className="flex gap-10">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <div>Sign In</div>
    </nav>
  );
}
