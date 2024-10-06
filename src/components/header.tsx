"use client";

import { ModeToglge } from "./mode-toggle";

export const Header = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md bg-inherit font-sans">
      <div
        className="text-lg md:text-2xl font-bold cursor-pointer"
        onClick={scrollToTop}
      >
        Izaak Sarnecki
      </div>
      {/* <ModeToglge /> */}
    </header>
  );
};
