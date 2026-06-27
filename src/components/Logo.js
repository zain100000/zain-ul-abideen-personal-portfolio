import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-12 h-12 border-2 border-solid text-2xl font-bold transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-main)",
          borderColor: "var(--white)",
          color: "var(--white)",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: "var(--primary)",
          /* Pulsing energetic aura glow matching the mockup highlights */
          boxShadow: [
            "0 0 0px rgba(99, 32, 238, 0)",
            "0 0 15px rgba(168, 85, 247, 0.6)",
            "0 0 25px rgba(99, 32, 238, 0.8)",
            "0 0 15px rgba(168, 85, 247, 0.6)",
            "0 0 0px rgba(99, 32, 238, 0)",
          ],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* SVG Crest Icon from the top-left of the mockup */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300 group-hover:stroke-[var(--primary)]"
        >
          <path
            d="M14 13H28M14 21H28M18 29H24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </MotionLink>
    </div>
  );
};

export default Logo;
