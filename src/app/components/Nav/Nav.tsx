import React from "react";

const Nav = () => {
  return (
    <nav className="flex w-full justify-between items-center p-8 ">
      <h2 className="font-bold text-2xl">
        Lend <span className="text-emerald-500">Wise</span>
      </h2>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Browse</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
