"use client"

import { useScroll, motion, useTransform } from "framer-motion";

export const GradientBackground = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["hsl(210, 100%, 90%)", "hsl(280, 100%, 80%)"]
  );

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{ background: backgroundColor }}
    />
  );
};
