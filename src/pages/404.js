import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AnimeCharacter from "../../public/images/anime-character.png";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Zain Ul Abideen | 404 - Zero Mortals Plan</title>
        <meta
          name="description"
          content="404 - Page Not Found. This timeline has been completely purified by the blades of judgment."
        />
      </Head>

      <TransitionEffect />

      <main
        className="min-h-screen w-full flex items-center justify-center text-light relative overflow-hidden select-none"
        style={{ backgroundColor: "var(--bg-main)" }}
      >
        {/* Divine Scythe Speed Lines Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen z-0"
          style={{
            backgroundImage: `radial-gradient(circle, transparent 30%, var(--bg-main) 100%), 
                              repeating-conic-gradient(from 0deg, transparent 0deg 1.5deg, #fff 2deg 3.5deg)`,
            backgroundSize: "100% 100%",
          }}
        />

        <Layout className="relative !bg-transparent w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-8 md:px-16 py-20 z-10">
          {/* LEFT SIDE: Character Arena Grid - HIDDEN ON MOBILE (xs/sm) & SHOWN ON DESKTOP (md+) */}
          <div className="hidden md:flex w-full md:w-1/2 h-[70vh] items-center justify-center relative order-1 md:order-1">
            {/* Super Saiyan Rosé Dark Divine Aura (Multi-layered RGBA Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-[rgba(157,23,77,0.22)] blur-[120px] rounded-full animate-pulse z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-[rgba(112,26,117,0.35)] via-[rgba(219,39,119,0.25)] to-[rgba(76,29,149,0.2)] blur-[80px] rounded-full z-0" />

            {/* Time Ring / Ring of Light Tactical Targets */}
            <div className="absolute w-48 h-48 border border-dashed border-pink-500/20 rounded-full animate-spin [animation-duration:25s]" />
            <div className="absolute w-64 h-64 border border-purple-500/10 rounded-full" />

            {/* Centered Image Showcase Wrapper */}
            <div className="relative w-full h-full max-w-[440px] z-10 flex items-center justify-center">
              <Image
                src={AnimeCharacter}
                alt="Goku Black Super Saiyan Rosé"
                fill
                priority
                sizes="50vw"
                className="object-contain object-center filter drop-shadow-[0_0_35px_rgba(219,39,119,0.45)] drop-shadow-[0_0_60px_rgba(112,26,117,0.3)]"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Heavy Fighting UI / Typography Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2 relative">
            {/* Giant Mockup Rosé 404 Text */}
            <div className="relative pointer-events-none font-display font-black italic tracking-tighter text-[6.5rem] sm:text-[10rem] md:text-[11rem] lg:text-[14rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-purple-600 to-transparent drop-shadow-[0_8px_16px_rgba(219,39,119,0.3)] uppercase skew-x-[-12deg] select-none mx-auto md:mx-0">
              404
              {/* Divine Slash energy beam line */}
              <div className="absolute bottom-1 sm:bottom-3 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-5/6 md:w-full h-[3px] bg-gradient-to-r from-transparent via-pink-600 to-transparent md:to-transparent md:from-pink-600" />
            </div>

            {/* FighterZ Style Danger Banner Strip */}
            <div className="bg-gradient-to-r from-pink-700 to-purple-800 border-l-4 border-pink-400 px-6 py-2 my-4 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-extrabold text-white skew-x-[-15deg] drop-shadow-[0_4px_10px_rgba(112,26,117,0.5)] mx-auto md:mx-0">
              ERROR: TIMELINE PURIFIED
            </div>

            {/* Main Header Callout */}
            <div className="w-full mt-2">
              <AnimatedText
                text="DIVINE WRATH UNLEASHED!"
                className="!text-center md:!text-left !text-xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-display font-black tracking-tighter uppercase italic skew-x-[-6deg] text-white drop-shadow-[0_3px_0_#000]"
              />
            </div>

            {/* Core description text node leveraging typography tokens */}
            <p
              className="mt-4 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0 italic"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-family)",
              }}
            >
              This coordinates sector has been erased entirely by the absolute
              beauty of a God's power. Retreat back through the spatial rift
              safely.
            </p>

            {/* Action Interactive Button Trigger */}
            <div className="mt-8 sm:mt-10 relative z-20 group mx-auto md:mx-0">
              {/* Rosé aura backdrop glow flare */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-fuchsia-500 rounded-xl blur opacity-50 group-hover:opacity-100 group-hover:scale-105 transition duration-300" />

              <Link
                href="/"
                className="relative group inline-flex items-center justify-center px-10 py-3.5 sm:py-4 rounded-xl font-sans font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 bg-white text-dark shadow-[0_4px_0_#701a75] sm:shadow-[0_5px_0_#701a75] active:translate-y-[4px] sm:active:translate-y-[5px] active:shadow-none skew-x-[-10deg]"
              >
                Escape Timeline
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
