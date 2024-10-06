"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  stack: string;
  github: string;
  website?: string;
  image?: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "echo's website",
    description: "Due to my participation in the voluntary group Webkom, I have contributed in the development of echo's website.",
    stack: "NextJS, React, TypeScript, Postgresql DB, HTML, TailwindCSS, Vercel, Flyctl",
    github: "https://github.com/echo-webkom/echo-web-mono",
    website: "https://echo.uib.no",
    image: "/resources/echo-website.jpg",
  },
  {
    id: 2,
    title: "Workout Tracker",
    description: "As part of my university class Object-Oriented programming, I developed a workout tracker in Java. The application uses a functional, yet very simple database. ",
    stack: "Java, Java Swing AWT",
    github: "https://github.com/izaaksarnecki1/WorkoutTracker",
  },
];

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 z-10"
    >
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id.toString()}
            className="bg-secondary p-4 rounded-lg cursor-pointer"
            onClick={() => setSelectedId(project.id)}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h2 className="text-2xl font-bold">{project.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId.toString()}
            className="fixed top-0 left-0 w-full h-full bg-secondary flex items-center justify-center flex-col p-8 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h2 className="text-3xl font-bold">
              {projects.find((p) => p.id === selectedId)?.title}
            </motion.h2>

            <motion.p className="mt-4 max-w-2xl w-3/5 text-justify">
              {projects.find((p) => p.id === selectedId)?.description}
            </motion.p>

            {projects.find((p) => p.id === selectedId)?.image && (
              <motion.img
                src={projects.find((p) => p.id === selectedId)?.image}
                alt={projects.find((p) => p.id === selectedId)?.title}
                className="w-1/3 h-auto rounded-lg mt-4"
              />
            )}

            <motion.p className="mt-4">
              <strong>Stack:</strong>{" "}
              {projects.find((p) => p.id === selectedId)?.stack}
            </motion.p>

            <div className="flex mt-6 space-x-4">
              <motion.a
                href={projects.find((p) => p.id === selectedId)?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub />
                <span>View on GitHub</span>
              </motion.a>

              {projects.find((p) => p.id === selectedId)?.website && (
                <motion.a
                  href={projects.find((p) => p.id === selectedId)?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExternalLinkAlt />
                  <span>Visit Website</span>
                </motion.a>
              )}
            </div>

            <motion.button
              onClick={() => setSelectedId(null)}
              className="mt-6 px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
              whileHover={{ scale: 1.05 }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
