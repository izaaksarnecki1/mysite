"use client"

import { motion } from "framer-motion";
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.section>
    </>
  );
}
