import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Itachi from "../../public/images/itachi-mscs.jpg";
import Levi from "../../public/images/levi-bscs.jpg";
import Kakashi from "../../public/images/kakashi-intermediate.jpg";
import Tanjiro from "../../public/images/tanjiro-matric.jpg";

const EducationEntry = ({
  type,
  time,
  place,
  cgpa,
  info,
  animeImage,
  side, // "left" or "right"
  marks,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -80 : 80 }}
      className="relative flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center"
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: false,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 18,
      }}
    >
      {/* Anime Character */}
      <div
        className={`w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 flex-shrink-0 relative
  order-1
  ${side === "left" ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 bg-gradient-to-br from-purple-600/30 to-yellow-400/20 rounded-full blur-2xl sm:blur-3xl" />
        <Image
          src={animeImage}
          alt={type}
          fill
          className="object-cover rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/10 shadow-xl sm:shadow-2xl ring-1 sm:ring-2 ring-offset-2 sm:ring-offset-4 ring-offset-[#0b0b0f] ring-purple-400/50"
        />
        {/* Decorative ring for mobile */}
        <div className="absolute -inset-1 rounded-full border border-purple-500/20 animate-pulse md:hidden" />
      </div>

      {/* Content Box */}
      <div
        className={`flex-1 w-full
  order-2 text-left
  ${side === "left" ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"}`}
      >
        <div className="bg-neutral-900/90 border border-purple-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-9">
          <div className="uppercase text-[10px] sm:text-xs tracking-widest text-purple-400 font-bold mb-2">
            EDUCATION ARC
          </div>

          <h3 className="text-base sm:text-xl md:text-3xl font-black text-white leading-tight">
            {type}
          </h3>

          <div className="mt-2 sm:mt-3 text-purple-400 text-sm sm:text-base">
            {time}
          </div>

          <div className="mt-1 sm:mt-3 text-purple-400 text-sm sm:text-base">
            {place}
          </div>

          {cgpa && (
            <div className="mt-3 sm:mt-4 text-yellow-400 font-mono font-bold text-base sm:text-lg md:text-xl">
              CGPA {cgpa}
            </div>
          )}

          {marks && (
            <div className="mt-3 sm:mt-4 text-yellow-400 font-mono font-bold text-base sm:text-lg md:text-xl">
              MARKS {marks}
            </div>
          )}

          <p className="mt-4 sm:mt-6 text-neutral-300 text-sm sm:text-[15.5px] leading-relaxed">
            {info}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);

  return (
    <div className="mt-16 sm:mt-24 md:mt-32 relative px-3 sm:px-4">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="text-purple-400 text-[10px] sm:text-sm tracking-[3px] sm:tracking-[4px] font-bold mb-3 sm:mb-4">
          THE ORIGIN STORY
        </div>
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter">
          EDUCATION ARC
        </h2>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28 relative">
          {/* MSCS - Character Left on large screens, top on others */}
          <EducationEntry
            type="Master of Science in Computer Science (MSCS)"
            time="2024 – Present (Final Semester)"
            place="University of Sargodha"
            cgpa="3.01 / 4.00"
            info="Advanced studies in modern computer science, research, system architecture, and emerging technologies."
            animeImage={Itachi}
            side="left"
          />

          {/* BSCS - Character Right on large screens, top on others */}
          <EducationEntry
            type="Bachelor of Science in Computer Science (BSCS)"
            time="2018 – 2022"
            place="University of Sargodha"
            cgpa="3.27 / 4.00"
            info="Built a solid foundation in programming, algorithms, databases, and software engineering principles."
            animeImage={Levi}
            side="right"
          />

          {/* ICS - Character Left on large screens, top on others */}
          <EducationEntry
            type="ICS (PHYSICS)"
            time="2016 – 2018"
            place="The Reader Group Of Colleges Sargodha"
            marks="753 / 1100"
            info="Focused on Physics, Mathematics, and computer fundamentals; developed analytical problem-solving skills and practical lab experience."
            animeImage={Kakashi}
            side="left"
          />

          {/* Matriculation - Character Right on large screens, top on others */}
          <EducationEntry
            type="Matriculation"
            time="2014 – 2016"
            place="Govt Comprehensive Boys High School Sargodha"
            marks="779 / 1100"
            info="Completed secondary education with a strong focus on science, mathematics, and foundational computer studies, gaining practical problem-solving experience."
            animeImage={Tanjiro}
            side="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
