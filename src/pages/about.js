import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/profile/profile_pic.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/Education";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0.1 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest);
    });
  }, [springValue]);

  return <span ref={ref} className="tabular-nums" />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Muhammad Zain-ul-Abideen | About Me</title>
        <meta
          name="description"
          content="Junior Mobile Application Developer specializing in React Native, MERN Stack &amp; scalable cross-platform solutions."
        />
      </Head>

      <TransitionEffect />

      <main className="min-h-screen bg-[#0b0b0f] text-light overflow-hidden relative">
        <Layout className="pt-16 md:pt-20 pb-16 md:pb-24 relative z-10 px-4 sm:px-6">
          {/* Hero Header */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20 pt-8">
            <AnimatedText
              text="Passion Fuels Purpose"
              className="!text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl font-black tracking-[-2px] mb-6 px-2"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto px-4">
              Junior Mobile Application Developer crafting high-performance
              React Native and MERN solutions
            </p>
          </div>

          {/* Main Content Card */}
          <div className="max-w-6xl mx-auto bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left: About Text */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-3 bg-purple-950/50 border border-purple-500/30 text-purple-400 text-sm font-semibold tracking-widest px-5 py-2 rounded-full">
                  <span className="text-xl">悟</span>
                  <span>THE JOURNEY</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
                  About Me
                </h2>

                <div className="space-y-5 md:space-y-6 text-base sm:text-[17px] leading-relaxed text-neutral-300">
                  <p>
                    Hi, I&apos;m{" "}
                    <span className="text-white font-semibold">
                      Muhammad Zain-ul-Abideen
                    </span>
                    , a Junior Mobile Application Developer with hands-on
                    commercial experience building cross-platform React Native
                    apps and scalable MERN stack solutions.
                  </p>
                  <p>
                    I specialize in creating high-performance, responsive mobile
                    applications and web systems. With strong expertise in{" "}
                    <span className="text-purple-400 font-medium">
                      React Native
                    </span>
                    , <span className="text-purple-400 font-medium">Redux</span>
                    ,{" "}
                    <span className="text-purple-400 font-medium">Node.js</span>
                    , and modern development practices, I focus on delivering
                    clean, maintainable, and user-centric code.
                  </p>
                  <p>
                    Currently pursuing my{" "}
                    <span className="text-white">
                      Master of Science in Computer Science
                    </span>
                    , I bring both academic rigor and real-world project
                    experience to every challenge.
                  </p>
                </div>
              </div>

              {/* Right: Profile Card - Hidden on mobile */}
              <div className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[360px] group">
                  <div className="absolute -inset-6 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent rounded-[3rem] blur-3xl -z-10 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl aspect-[4/4.6]">
                    <Image
                      src={profile}
                      alt="Muhammad Zain-ul-Abideen"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { number: 1, label: "Years Experience", suffix: "+" },
                { number: 10, label: "Projects Delivered", suffix: "+" },
                { number: 8, label: "Technologies Mastered", suffix: "" },
                { number: 100, label: "Client Satisfaction", suffix: "%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/50 rounded-2xl p-6 md:p-8 text-center transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:text-purple-400 flex items-baseline justify-center gap-1">
                    <AnimatedNumberFramerMotion value={stat.number} />
                    <span className="text-2xl md:text-3xl text-purple-500">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Education Section */}
          <Education />
        </Layout>
      </main>
    </>
  );
}
