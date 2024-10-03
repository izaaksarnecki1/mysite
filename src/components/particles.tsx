import { motion } from "framer-motion";

export const Particles = () => {
  const particleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], x: [0, 20, -20], y: [0, -20, 20] },
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] absolute"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        initial="initial"
        animate="animate"
        variants={particleVariants}
        transition={{
          duration: Math.random() * 5 + 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    ))}
  </div>
);

};
