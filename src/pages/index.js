import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/profile/profile_pic.jpg";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>MZA - React Native Developer</title>
        <meta
          property="og:image"
          content="https://zain-ul-abideen-personal-portfolio.vercel.app/profile/profile_pic.jpg"
        />
        <meta property="og:title" content="MZA - React Native Developer" />
        <meta
          property="og:description"
          content="I build React Native applications with clean UI, smooth performance, and cross-platform consistency. Explore my work focused on mobile app development, component-driven architecture, and scalable user experiences."
        />
        <meta
          property="og:url"
          content="https://zain-ul-abideen-personal-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>

      <TransitionEffect />

      <article className="w-full lg:min-h-screen flex items-center justify-center text-light relative overflow-hidden pt-20 lg:pt-[80px]">
        <Layout className="w-full !pt-0 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center lg:min-h-[calc(100vh-80px)] mt-6 sm:mt-8 md:mt-10 lg:mt-0">
            {/* LEFT SIDE: Profile Picture - Hidden on mobile/tablet */}
            <div className="flex justify-center lg:justify-end items-center w-full">
              <div className="relative w-full max-w-[440px] xl:max-w-[480px]">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={profilePic}
                    alt="Muhammad Zain-ul-Abideen Portfolio Profile"
                    className="w-full h-auto object-cover"
                    sizes="50vw"
                    priority
                    quality={95}
                  />
                </div>
                <div className="absolute -inset-8 -top-12 bg-gradient-to-br from-blue-500 via-purple-600 via-cyan-400 to-orange-500 opacity-25 blur-3xl rounded-[100px] -z-10 pointer-events-none" />
                <div className="absolute -inset-12 bg-gradient-to-tl from-pink-500 via-yellow-400 to-transparent opacity-15 blur-[120px] rounded-full -z-10 pointer-events-none" />
              </div>
            </div>

            {/* RIGHT SIDE: Content Area */}
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full py-8">
              <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
                <AnimatedText
                  text="Junior Mobile Application Developer"
                  className="!text-center lg:!text-left !text-3xl sm:!text-4xl md:!text-4xl lg:!text-4xl xl:!text-5xl font-bold tracking-tight leading-[1.15]"
                />

                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-light/80 leading-relaxed max-w-md mx-auto lg:mx-0 lg:max-w-none">
                  Junior Mobile Application Developer with proven commercial
                  experience engineering cross-platform React Native mobile apps
                  and scalable MERN stack web solutions. Passionate about
                  building high-performance, responsive digital products.
                </p>

                {/* Interactive Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 w-full">
                  <Link
                    href="/zain-ul-abideen-resume.pdf"
                    target="_blank"
                    className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg w-full sm:w-auto"
                    style={{
                      backgroundColor: "#fff",
                      color: "var(--bg-main)",
                    }}
                    download
                  >
                    Resume
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium tracking-wide text-white border border-white/20 hover:border-white/50 rounded-xl transition-all hover:bg-white/5 w-full sm:w-auto"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
