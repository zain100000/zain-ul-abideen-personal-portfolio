import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLink,
} from "react-icons/fa";

// Import anime character for the experience section
import Vegeta from "../../public/images/vegeta.jpg";
import Light from "../../public/images/yagami.jpg";
import Gojo from "../../public/images/gojo.jpg";
import AnimatedText from "./AnimatedText";

const LiIcon = ({ reference }) => {
  return (
    <motion.div
      ref={reference}
      className="absolute left-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500 
        shadow-lg shadow-purple-500/50 flex items-center justify-center z-10
        border-2 border-purple-300"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
    >
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white" />
    </motion.div>
  );
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  character,
  characterName,
  color,
}) => {
  const ref = useRef(null);

  const colorMap = {
    purple: "from-purple-500/30 to-pink-500/30",
    blue: "from-blue-500/30 to-cyan-500/30",
    red: "from-red-500/30 to-orange-500/30",
    green: "from-green-500/30 to-emerald-500/30",
    yellow: "from-yellow-500/30 to-amber-500/30",
  };

  return (
    <li
      ref={ref}
      className="my-8 sm:my-10 md:my-12 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between relative pl-8 sm:pl-10 md:pl-12"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        className="w-full bg-gradient-to-br from-neutral-900/95 via-neutral-950/95 to-black/95 
          rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 
          shadow-xl shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 
          group backdrop-blur-sm relative"
      >
        {/* Glow effect on hover */}
        <div
          className="absolute -inset-px bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent 
          rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Character Avatar - Small floating - FIXED: Now properly positioned */}
        {character && (
          <div
            className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 
            w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 z-20"
          >
            <div className="relative w-full h-full">
              {/* Glowing aura */}
              <div
                className={`absolute inset-[-50%] bg-gradient-to-r ${colorMap[color]} rounded-full blur-xl sm:blur-2xl animate-pulse`}
              />

              {/* Character image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-gradient-to-br from-neutral-900 to-black">
                <Image
                  src={character}
                  alt={characterName || "Character"}
                  fill
                  className="object-cover object-center scale-110"
                />
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 pr-14 sm:pr-16 md:pr-20">
          <span className="text-xs sm:text-sm font-medium text-purple-400 bg-purple-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-500/20">
            <FaBriefcase className="inline mr-1 w-2 h-2 sm:w-3 sm:h-3" />
            Experience
          </span>
          {companyLink && (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-neutral-500 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-1 cursor-pointer z-30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLink className="w-2 h-2 sm:w-3 sm:h-3" />
              Company Website
            </a>
          )}
        </div>

        <h3
          className="capitalize font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-purple-400 
          transition-colors duration-300 pr-14 sm:pr-16 md:pr-20"
        >
          {position}
          {company && (
            <span className="text-purple-400 ml-1 sm:ml-2">@{company}</span>
          )}
        </h3>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 sm:mt-2 pr-14 sm:pr-16 md:pr-20">
          <span className="flex items-center gap-1 text-xs sm:text-sm text-neutral-400">
            <FaCalendarAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
            {time}
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm text-neutral-400">
            <FaMapMarkerAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
            {address}
          </span>
        </div>

        <p
          className="font-medium w-full text-xs sm:text-sm md:text-base text-neutral-300 
          leading-relaxed mt-2 sm:mt-3 pr-14 sm:pr-16 md:pr-20"
        >
          {work}
        </p>

        {/* Decorative line */}
        <div
          className="mt-3 sm:mt-4 h-0.5 w-12 sm:w-16 bg-gradient-to-r from-purple-500/50 to-transparent 
          group-hover:w-24 sm:group-hover:w-32 transition-all duration-500"
        />
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-24 sm:mt-32 md:mt-32 mb-16 sm:mb-24 md:mb-32 px-3 sm:px-4 md:px-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
        <AnimatedText
          text="EXPERIENCE"
          className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white 
            tracking-[-1px] sm:tracking-[-2px] mb-3 sm:mb-4 text-center"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto px-4 text-white/80">
          My professional journey in mobile & web development
        </p>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-[14px] sm:left-[18px] md:left-[22px] top-0 w-[3px] sm:w-[4px] 
            h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 origin-top rounded-full"
          style={{ scaleY: scrollYProgress }}
        />

        {/* Timeline decorative dots */}
        <div
          className="absolute left-[14px] sm:left-[18px] md:left-[22px] -top-2 w-3 h-3 sm:w-4 sm:h-4 
          bg-purple-500 rounded-full blur-sm animate-pulse"
        />
        <div
          className="absolute left-[14px] sm:left-[18px] md:left-[22px] bottom-0 w-3 h-3 sm:w-4 sm:h-4 
          bg-blue-500 rounded-full blur-sm animate-pulse"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-3 md:ml-4">
          {/* Mobile Application Developer Internee - Spark Solutionz */}
          <Details
            position="React Native Internee"
            company="Spark Solutionz"
            companyLink="https://www.linkedin.com/company/spark-solutionz/"
            time="July 2026 - Present"
            address="Sargodha, Pakistan | On-Site"
            work="Accelerated development velocity by 20% by designing and engineering a modular repository of 15+ reusable, cross-platform UI components. Optimized mobile application performance across iOS and Android ecosystems, translating complex UI/UX wireframes into responsive production code. Collaborated with cross-functional backend teams to seamlessly integrate RESTful APIs and streamline mobile user experiences. Championed clean code practices and robust state management workflows to ensure predictable, scalable data flows."
            character={Gojo}
            characterName="Goku Black"
            color="blue"
          />

          {/* Junior Mobile Application Developer - Kreative Nomads */}
          <Details
            position="Junior React Native Developer"
            company="Kreative Nomads"
            time="Sep 2024 - Feb 2025"
            address="Lahore, Pakistan | Remote"
            work="Developed and deployed 2+ cross-platform mobile applications for iOS and Android using React Native. Implemented Redux state management and optimized app performance, reducing load times by 30%. Integrated Firebase for real-time data synchronization and implemented push notifications. Conducted code reviews and mentored junior developers on best practices for component reusability and testing methodologies."
            character={Vegeta}
            characterName="Vegeta"
            color="blue"
          />

          {/* Mern Stack internee - Techup-24 */}
          <Details
            position="Mern Stack Internee"
            company="Techup-24"
            companyLink="https://www.linkedin.com/company/techup-ai/"
            time="June 2024 - August 2024"
            address="Rawalpindi, Pakistan | On-Site"
            work="Enhanced digital accessibility and cross-browser compatibility by deploying 100% responsive user interfaces using React.js for full-stack web applications. Boosted application stability and backend performance under simulated traffic by developing, testing, and maintaining secure server-side REST APIs with Node.js and Express.js. Minimized technical debt by architecting clean, reusable frontend components, facilitating easier feature scalability for the core engineering team. Maximized data integrity by managing structured schema integrations within MongoDB databases to support dynamic application features."
            character={Light}
            characterName="Light Yagami"
            color="red"
          />
        </ul>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 sm:mt-16 md:mt-20 text-center"
      >
        <div
          className="inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 
          bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full 
          border border-purple-500/20"
        >
          <span className="text-xs sm:text-sm md:text-base text-neutral-400">
            🚀 Every experience shapes the journey —
            <span className="text-purple-400 font-semibold">
              {" "}
              Let&apos;s build something legendary together
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
