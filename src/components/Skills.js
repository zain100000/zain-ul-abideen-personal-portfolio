import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Shenron from "../../public/images/shenron.jpg"; // adjust path
import AnimatedText from "./AnimatedText";

// ==============================
// SMALL STAR SVG (reusable)
// ==============================
const Star = ({ size = 12, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`text-red-600 drop-shadow-[0_0_6px_rgba(255,0,0,0.9)] ${className}`}
    fill="currentColor"
  >
    <path d="M12 2L14.5 9.5L22 9.5L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5L9.5 9.5L12 2Z" />
  </svg>
);

// ==============================
// DRAGON BALL – multi‑star support
// ==============================
const DragonBall = ({ name, x, y, stars = 1, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Generate star elements with responsive sizes
  const starElements = Array.from({ length: stars }, (_, i) => (
    <Star key={i} size={stars <= 3 ? 16 : 12} className="inline-block" />
  ));

  return (
    <motion.div
      ref={ref}
      className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer"
      style={{ left: x, top: y }}
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={
        isInView
          ? {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: delay,
              },
            }
          : {}
      }
      whileHover={{ scale: 1.15, rotate: 5 }}
    >
      <div className="relative w-full h-full">
        {/* Outer glow – breathing */}
        <div className="absolute inset-[-30%] rounded-full bg-orange-500/40 blur-2xl sm:blur-3xl animate-pulse" />

        {/* Main ball – classic Dragon Ball gradient */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 shadow-[0_0_20px_rgba(255,165,0,0.4)_md:shadow-[0_0_40px_rgba(255,165,0,0.6)] overflow-hidden">
          {/* Inner glow / specular highlights */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30 rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.7)_0%,_transparent_60%)] rounded-full" />

          {/* Content: stars + skill name */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            {/* Stars row – wrapped to fit */}
            <div className="flex flex-wrap items-center justify-center gap-0.5 px-1">
              {starElements}
            </div>
            {/* Skill name */}
            <span className="text-white font-extrabold text-[8px] sm:text-[10px] md:text-xs text-center leading-tight drop-shadow-[0_0_6px_rgba(0,0,0,0.9)] px-1">
              {name}
            </span>
          </div>

          {/* Small specular spots */}
          <div className="absolute top-1 left-2 sm:top-2 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white/60 rounded-full blur-sm" />
          <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/20 rounded-full blur-sm" />
        </div>
      </div>
    </motion.div>
  );
};

// ==============================
// MAIN SKILLS – FULL SCREEN
// ==============================
const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Skills from your resume (8 items)
  const skills = [
    "React Js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "API Integration",
  ];

  // Assign star numbers (1–7, then 1 again for the 8th skill)
  const starCounts = [1, 2, 3, 4, 5, 6, 7, 1];

  // Responsive positions - adjusted for all screen sizes
  const getPositions = () => {
    // Base positions that work on all screens
    return [
      { x: "8%", y: "8%" }, // React Js
      { x: "72%", y: "10%" }, // React Native
      { x: "2%", y: "38%" }, // Node.js
      { x: "80%", y: "42%" }, // Express.js
      { x: "15%", y: "72%" }, // MongoDB
      { x: "65%", y: "76%" }, // REST APIs
      { x: "44%", y: "86%" }, // Git & GitHub
      { x: "30%", y: "22%" }, // API Integration
    ];
  };

  const positions = getPositions();

  // Build the ball data
  const balls = skills.map((skill, index) => ({
    name: skill,
    stars: starCounts[index % starCounts.length],
    x: positions[index % positions.length].x,
    y: positions[index % positions.length].y,
    delay: index * 0.12,
  }));

  return (
    <div
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden bg-black"
    >
      {/* ===== Background ===== */}
      <div className="absolute inset-0 opacity-20 sm:opacity-50">
        <Image
          src={Shenron}
          alt="Shenron"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Floating particles - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300/40 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ===== Content ===== */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-2 sm:px-4">
        {/* Title and subtitle */}
        <AnimatedText
          text="MY SKILLS"
          className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-300 tracking-[-1px] sm:tracking-[-2px] mt-8 sm:mt-10 text-center"
        />

        {/* Dragon Balls Container - Responsive height */}
        <div className="relative w-full max-w-5xl aspect-square md:aspect-[4/3] flex-1 max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh]">
          {/* Center Shenron text - smaller on mobile */}

          {/* Render all Dragon Balls */}
          {balls.map((ball, idx) => (
            <DragonBall
              key={idx}
              name={ball.name}
              x={ball.x}
              y={ball.y}
              stars={ball.stars}
              delay={ball.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
