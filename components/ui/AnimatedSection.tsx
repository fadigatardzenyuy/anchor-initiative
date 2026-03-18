"use client";

import { motion } from "framer-motion";

type Direction = "up" | "left" | "right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const getInitialTranslate = (direction: Direction): { x?: number; y?: number } => {
  switch (direction) {
    case "up":
      return { y: 24 };
    case "left":
      return { x: -24 };
    case "right":
      return { x: 24 };
    default:
      return { y: 24 };
  }
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const initialTranslate = getInitialTranslate(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialTranslate }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
