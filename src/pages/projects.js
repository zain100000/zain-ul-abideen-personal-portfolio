import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";

// Import your project images
import NovaNotes from "../../public/projects/proj1.jpg";
import TheHope from "../../public/projects/proj2.jpg";
import CoffeeSpot from "../../public/projects/proj3.jpg";

// Import anime character images
import Sakamoto from "../../public/images/sakamoto.jpg";
import Johan from "../../public/images/johan.jpg";
import Ayonokoji from "../../public/images/ayonokoji.jpg";

const FramerImage = motion(Image);

// ==============================
// ANIME CHARACTER AVATAR
// ==============================
const CharacterAvatar = ({ character, characterName, color = "purple" }) => {
  const colorMap = {
    purple: "from-purple-500/30 to-pink-500/30",
    blue: "from-blue-500/30 to-cyan-500/30",
    red: "from-red-500/30 to-orange-500/30",
    green: "from-green-500/30 to-emerald-500/30",
    yellow: "from-yellow-500/30 to-amber-500/30",
  };

  return (
    <div className="absolute -top-8 -right-8 w-28 h-28 md:w-32 md:h-32 z-20">
      <div className="relative w-full h-full">
        {/* Glowing aura */}
        <div
          className={`absolute inset-[-40%] bg-gradient-to-r ${colorMap[color]} rounded-full blur-2xl animate-pulse`}
        />

        {/* Character image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-br from-neutral-900 to-black">
          <Image
            src={character}
            alt={characterName}
            fill
            className="object-contain object-center scale-110"
          />
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
};

// ==============================
// FEATURED PROJECT CARD
// ==============================
const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  date,
  tech,
  icon,
  character,
  characterName,
  characterColor = "purple",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className="relative flex w-full flex-col md:flex-row items-center justify-between rounded-2xl sm:rounded-3xl rounded-br-2xl
        border border-purple-500/20 bg-gradient-to-br from-neutral-900/95 via-neutral-950/95 to-black/95 
        p-4 sm:p-6 md:p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-xl
        hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-500 group"
    >
      {/* Anime Energy Aura - Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Anime Quote - Floating text (hidden on mobile) */}
      <div className="hidden sm:block absolute -top-3 left-8 text-[8px] sm:text-[10px] text-purple-400/40 font-light italic tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        "Code is my weapon"
      </div>

      {/* Character Avatar */}
      <CharacterAvatar
        character={character}
        characterName={characterName}
        color={characterColor}
      />

      {/* Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl mb-4 md:mb-0">
        <FramerImage
          src={img}
          className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-contain rounded-xl"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex w-full md:w-1/2 flex-col items-start justify-between pl-0 md:pl-6 lg:pl-8">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {icon && <span className="text-base sm:text-xl">{icon}</span>}
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-500/20">
            {type}
          </span>
          {date && (
            <span className="text-[10px] sm:text-xs md:text-sm text-neutral-500 flex items-center gap-1">
              <FaCalendarAlt className="w-2 h-2 sm:w-3 sm:h-3" />
              {date}
            </span>
          )}
        </div>

        <h2
          className="my-2 sm:my-3 w-full text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white 
          group-hover:text-purple-400 transition-colors duration-300"
        >
          {title}
        </h2>

        <p className="my-1 sm:my-2 rounded-md font-medium text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
          {summary}
        </p>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-neutral-800 hover:bg-purple-600/20 
                border border-neutral-700 hover:border-purple-500 rounded-lg text-[10px] sm:text-xs md:text-sm text-neutral-300 
                hover:text-white transition-all duration-300 cursor-pointer z-30 relative"
            >
              <FaGithub className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />{" "}
              <span className="hidden xs:inline">Code</span>
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-purple-600/20 hover:bg-purple-600/30 
                border border-purple-500/30 hover:border-purple-500 rounded-lg text-[10px] sm:text-xs md:text-sm text-purple-400 
                hover:text-purple-300 transition-all duration-300 cursor-pointer z-30 relative"
            >
              <FaExternalLinkAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />{" "}
              <span className="hidden xs:inline">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// ==============================
// REGULAR PROJECT CARD
// ==============================
const Project = ({
  title,
  type,
  description,
  img,
  link,
  github,
  tech,
  date,
  icon,
  character,
  characterName,
  characterColor = "blue",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="relative flex w-full flex-col items-center justify-center rounded-xl sm:rounded-2xl rounded-br-2xl 
        border border-purple-500/20 bg-gradient-to-br from-neutral-900/95 via-neutral-950/95 to-black/95 
        p-4 sm:p-6 shadow-2xl backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 
        group hover:-translate-y-1 sm:hover:-translate-y-2"
    >
      {/* Glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Character Avatar */}
      <CharacterAvatar
        character={character}
        characterName={characterName}
        color={characterColor}
      />

      <div className="w-full overflow-hidden rounded-lg sm:rounded-xl">
        <FramerImage
          src={img}
          alt={title}
          className="w-20 h-auto max-h-[150px] sm:max-h-[180px] md:max-h-[200px] object-cover rounded-lg sm:rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="mt-3 sm:mt-4 flex w-full flex-col items-start justify-between">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {icon && <span className="text-base sm:text-lg">{icon}</span>}
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-500/20">
            {type}
          </span>
          {date && (
            <span className="text-[8px] sm:text-[10px] md:text-xs text-neutral-500 flex items-center gap-1">
              <FaCalendarAlt className="w-2 h-2 sm:w-3 sm:h-3" />
              {date}
            </span>
          )}
        </div>

        <h2
          className="my-1.5 sm:my-2 w-full text-left text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 
          transition-colors duration-300"
        >
          {title}
        </h2>

        {description && (
          <p className="my-1 sm:my-2 text-[10px] sm:text-xs md:text-sm font-medium text-neutral-300 leading-relaxed text-left">
            {description}
          </p>
        )}

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1.5 sm:mt-2">
            {tech.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-0.5 bg-neutral-800/50 border border-neutral-700 rounded-full text-neutral-400"
              >
                {t}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 text-neutral-500">
                +{tech.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-800 hover:bg-purple-600/20 
                border border-neutral-700 hover:border-purple-500 rounded-lg text-[8px] sm:text-[10px] md:text-xs text-neutral-300 
                hover:text-white transition-all duration-300 cursor-pointer z-30 relative"
            >
              <FaGithub className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />{" "}
              Code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-600/20 hover:bg-purple-600/30 
                border border-purple-500/30 hover:border-purple-500 rounded-lg text-[8px] sm:text-[10px] md:text-xs text-purple-400 
                hover:text-purple-300 transition-all duration-300 cursor-pointer z-30 relative"
            >
              <FaExternalLinkAlt className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />{" "}
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// ==============================
// MAIN PROJECTS PAGE
// ==============================
export default function Projects() {
  return (
    <>
      <Head>
        <title>Muhammad Zain-ul-Abideen | Projects</title>
        <meta
          name="description"
          content="Explore my portfolio of developed projects including full-stack applications, mobile apps, and web solutions built with React Native, MERN stack, and modern technologies."
        />
      </Head>

      <TransitionEffect />

      <main className="min-h-screen bg-[#0b0b0f] text-light overflow-hidden relative">
        <Layout className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 relative z-10 px-3 sm:px-4 md:px-6">
          {/* Header Section with Anime Vibe */}
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 pt-4 sm:pt-6 md:pt-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-block p-3 sm:p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 sm:mb-6 relative"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl">⚔️</span>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping opacity-50" />
            </motion.div>
            <AnimatedText
              text="Code That Speaks"
              className="!text-3xl sm:!text-4xl md:!text-6xl lg:!text-7xl xl:!text-8xl font-black tracking-[-1px] sm:tracking-[-2px] mb-3 sm:mb-4 px-2"
            />
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4">
              Crafting scalable mobile & web solutions with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Featured Project - Nova Notes */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                <span className="text-purple-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
                  <FaTag className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
                  Featured Project
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
              </div>

              <FeaturedProject
                type="Mobile Application"
                icon="📝"
                img={NovaNotes}
                title="Nova Notes"
                summary="A high-performance, fully offline-capable mobile application dedicated to local task management and daily note organization. Features client-side state management with Redux Toolkit, preventing unneeded UI rerenders with predictable data flow. Custom lightweight UI components that operate independently of network connection. Published on Google Play Store with thousands of active users."
                github="https://github.com/zain100000/NovaNotes"
                link="https://play.google.com/store/apps/details?id=com.novanotes"
                date="2026"
                tech={[
                  "React Native",
                  "Redux",
                  "Async Storage",
                  "Offline First",
                ]}
                character={Sakamoto}
                characterColor="purple"
              />
            </div>

            {/* Project Grid - All Projects */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
              <span className="text-purple-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
                <FaTag className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
                All Projects
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
            </div>

            {/* Projects Grid - The Hope + Coming Soon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* The Hope - First Project */}
              <Project
                type="Full-Stack Wellness Platform"
                icon="💚"
                img={TheHope}
                title="The Hope"
                description="A comprehensive cross-platform wellness application featuring real-time habit building, mood tracking, yoga guidance, and secure content delivery. Includes a specialized React.js web-based super admin panel for monitoring active user metrics, system content ingestion, and analytics. Features end-to-end authentication with secure user registration, encrypted login, and automated password recovery."
                github="https://github.com/zain100000/The_Hope"
                // link="https://the-hope-demo.com"
                date="2026"
                tech={[
                  "React Native",
                  "Redux Toolkit",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React.js",
                  "REST APIs",
                ]}
                character={Johan}
                characterColor="blue"
              />

              {/* Coffee Spot - econd Project */}
              <Project
                type="Full-Stack Coffee Platform"
                icon="☕"
                img={CoffeeSpot}
                title="Coffee Spot"
                description="A comprehensive full-stack mobile and web-based platform helping users discover new coffees, place orders, and access customer care. Features a React Native CLI mobile app for Android users, a Node.js + Express REST API handling all business logic, and a React.js super admin panel for managing shops, users, and orders. All codebases are modular, scalable, and follow best practices in architecture and design. Includes JWT authentication, role-based access control, MongoDB integration, and static payment flow."
                github="https://github.com/zain100000/CoffeeSpot"
                // link="https://coffee-spot-demo.com"
                date="2026"
                tech={[
                  "React Native CLI",
                  "Redux",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React.js",
                  "JWT",
                  "REST APIs",
                ]}
                character={Ayonokoji}
                characterColor="blue"
              />
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 sm:mt-12 md:mt-16 text-center"
            >
              <div className="inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                <span className="text-xs sm:text-sm md:text-base text-neutral-400">
                  💻 Every project is a learning journey —
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Let's build something legendary together
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
}
