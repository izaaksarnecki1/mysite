"use client";

import { ModeToglge } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-lg font-bold">
        <a href="/">Izaak Sarnecki</a>
      </div>

      <nav className=" justify-between space-x-8 text-lg">
        <a className="nav-link" href="/projects">
          Projects
        </a>
        <a className="nav-link" href="/about">
          About
        </a>
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </nav>

      <ModeToglge />
    </header>
  );
};
