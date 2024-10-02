"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  const handleScroll = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      <motion.h1
        className="text-5l font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Izaak
      </motion.h1>

      <h1 className="text-5xl font-bold mb-2">Hi, I'm Izaak</h1>
      <p className="text-xl mb-4">I study computer science at the University of Bergen.</p>
      <button
        onClick={handleScroll}
        className="px-4 py-2 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        View My Projects
      </button>
    </section>
  );
};
