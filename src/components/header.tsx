"use client";

import { ModeToglge } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-lg font-bold">
        <a href="/">Izaak Sarnecki</a>
      </div>
      <ModeToglge />
    </header>
  );
};
