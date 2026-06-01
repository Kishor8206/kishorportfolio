import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const buildVariants = (direction: Direction, distance = 40): Variants => {
  const hidden: Record<string, number> = { opacity: 0 };
  const visible: Record<string, number> = { opacity: 1 };

  switch (direction) {
    case "up":    hidden.y = distance;  visible.y = 0; break;
    case "down":  hidden.y = -distance; visible.y = 0; break;
    case "left":  hidden.x = distance;  visible.x = 0; break;
    case "right": hidden.x = -distance; visible.x = 0; break;
    case "scale": hidden.scale = 0.85;  visible.scale = 1; break;
    case "fade":  break;
  }

  return { hidden, visible };
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.15,
}) => {
  const variants = buildVariants(direction);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger container — wraps children and staggers their entrance
interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  stagger = 0.12,
  className,
  once = true,
}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Child item for use inside StaggerContainer
interface StaggerItemProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  direction = "up",
  className,
}) => {
  const variants = buildVariants(direction, 30);
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
