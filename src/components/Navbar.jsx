import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[black] h-[10vh] text-white px-8 py-5 flex justify-between items-center">
      <div className="text-4xl">Logo</div>
      <ul className="flex gap-10">
        <li>
          <NavLink className={({isActive})=> isActive?'text-[red]':''} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({isActive})=> isActive?'text-[red]':''}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={({isActive})=> isActive?'text-[red]':''}>Contact</NavLink>
        </li>
      </ul>
      <div>Sign In</div>
    </nav>
  );
}
