"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectProps = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Subtitle 2",
    description: "Description 2",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Subtitle 3",
    description: "Description 3",
    link: "https://example.com",
  },
];

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      <motion.h1
        className="text-5xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id.toString()}
            className="p-4 border rounded-lg cursor-pointer"
            onClick={() => setSelectedId(project.id)}
            whileHover={{ scale: 1.05 }}
          >
            <motion.h5 className="text-xl">{project.subtitle}</motion.h5>
            <motion.h2 className="text-2xl font-bold">
              {project.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId.toString()}
            className="fixed top-0 left-0 w-full h-full bg-gray-700 text-white flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h5>
              {projects.find((p) => p.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2 className="text-3xl font-bold">
              {projects.find((p) => p.id === selectedId)?.title}
            </motion.h2>
            <motion.p className="mt-4">
              {projects.find((p) => p.id === selectedId)?.description}
            </motion.p>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
