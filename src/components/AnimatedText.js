import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

// Aggressive pop-in transition timing mimicking an anime intro effect
const singleWord = {
  hidden: {
    opacity: 0,
    y: 30,
    skewX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Sudden explosive spring snap
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full capitalize font-display italic ${className}`}
        style={{
          color: "var(--white)",
          lineHeight: "1.1",
        }}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              className="inline-block"
              key={word + "-" + index}
              variants={singleWord}
            >
              <span
                className={
                  word.toLowerCase().includes("mobile")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryGlow drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : ""
                }
              >
                {word}
              </span>
              &nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
