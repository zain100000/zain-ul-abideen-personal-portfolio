import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  const explosiveEase = [0.16, 1, 0.3, 1];

  return (
    <>
      {/* LAYER 1: Core Pure White Plasma Burst */}
      <motion.div
        className="fixed inset-0 h-screen w-screen z-50 pointer-events-none"
        style={{
          background: "var(--white)",
          mixBlendMode: "overlay",
        }}
        initial={{ opacity: 1, scale: 0.3 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onAnimationComplete={() => {
          // Remove after animation completes
          const el = document.querySelector(".transition-layer-1");
          if (el) el.style.display = "none";
        }}
      />

      {/* LAYER 2: Chaotic Energy Slash 1 */}
      <motion.div
        className="fixed inset-0 h-screen w-screen z-40 origin-left pointer-events-none transition-layer-2"
        style={{
          backgroundColor: "var(--primary)",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          boxShadow: "inset -50px 0 80px rgba(255,255,255,0.4)",
        }}
        initial={{ x: "-100%", skewX: -15 }}
        animate={{ x: ["-100%", "0%", "100%"] }}
        transition={{
          times: [0, 0.45, 1],
          duration: 0.85,
          ease: explosiveEase,
        }}
        onAnimationComplete={() => {
          const el = document.querySelector(".transition-layer-2");
          if (el) el.style.display = "none";
        }}
      />

      {/* LAYER 3: Chaotic Energy Slash 2 */}
      <motion.div
        className="fixed inset-0 h-screen w-screen z-30 origin-right pointer-events-none transition-layer-3"
        style={{
          backgroundColor: "var(--primary-glow)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          filter: "drop-shadow(0px 0px 30px var(--primary-glow))",
        }}
        initial={{ x: "100%", skewX: -15 }}
        animate={{ x: ["100%", "0%", "-100%"] }}
        transition={{
          delay: 0.08,
          times: [0, 0.45, 1],
          duration: 0.85,
          ease: explosiveEase,
        }}
        onAnimationComplete={() => {
          const el = document.querySelector(".transition-layer-3");
          if (el) el.style.display = "none";
        }}
      />

      {/* LAYER 4: The Residual Aura Shockwave Expansion */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-20 pointer-events-none transition-layer-4"
        style={{
          width: "100vmax",
          height: "100vmax",
          background:
            "radial-gradient(circle, transparent 30%, var(--primary-glow) 70%, var(--bg-main) 100%)",
          border: "8px double var(--primary)",
        }}
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
        onAnimationComplete={() => {
          const el = document.querySelector(".transition-layer-4");
          if (el) el.style.display = "none";
        }}
      />

      {/* LAYER 5: Deep Dark Canvas Backdrop */}
      <motion.div
        className="fixed inset-0 h-screen w-screen z-10 pointer-events-none transition-layer-5"
        style={{ backgroundColor: "var(--bg-main)" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
        onAnimationComplete={() => {
          const el = document.querySelector(".transition-layer-5");
          if (el) el.style.display = "none";
        }}
      />
    </>
  );
};

export default TransitionEffect;
