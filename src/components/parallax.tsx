"use client"

import { useTransform, useScroll, motion } from "framer-motion";

export const Parallax = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute top-0 w-full h-96 bg-[hsl(var(--primary))]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 w-full h-96 bg-[hsl(var(--secondary))]"
        style={{ y: y2 }}
      />
    </div>
  );
};
