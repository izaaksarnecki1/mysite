"use client"

import { motion } from "framer-motion";

export const About = () => {
  const handleScrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      <motion.h1
        className="text-5xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h1>
      <p className="text-xl mb-4">
        About section
      </p>
      <button
        onClick={handleScrollToHero}
        className="px-4 py-2 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        Back to top
      </button>
    </section>
  );
}
