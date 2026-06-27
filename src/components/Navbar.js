import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={`${className} relative tracking-widest uppercase font-semibold transition-colors duration-300 group py-2`}
    >
      <span
        className={`text-xs ${isActive ? "text-primary" : "text-textMuted"} group-hover:text-light transition-colors duration-300`}
        style={{
          fontFamily: "var(--font-family)",
          textShadow: isActive ? "0 0 12px var(--primary-glow)" : "none",
        }}
      >
        {title}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out bg-primary shadow-[0_0_8px_var(--primary-glow)] ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  const handleClick = (e) => {
    e.preventDefault();
    toggle();
    router.push(href);
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.3 },
    },
  };
  return (
    <motion.div variants={itemVariants} className="w-full text-center">
      <button
        className={`${className} relative tracking-widest uppercase font-display font-extrabold bg-transparent border-0 my-3 text-2xl transition-colors duration-300 w-full ${
          isActive ? "text-primary" : "text-light"
        } hover:text-primaryGlow`}
        onClick={handleClick}
        style={{ fontStyle: "italic" }}
      >
        {title}
      </button>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  };

  return (
    <header
      className="w-full flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 fixed top-0 left-0 z-[100] transition-all duration-300 shadow-lg hover:shadow-xl"
      style={{
        height: scrolled ? "80px" : "90px",
        // Increased alpha values to prevent under-header component leaking while scrolling
        backgroundColor: scrolled
          ? "rgba(11, 11, 15, 0.98)"
          : "rgba(11, 11, 15, 0.85)",
        backdropFilter: "blur(20px)",

        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Left Segment: Logo */}
      <div className="z-[110] transform scale-90 sm:scale-100 origin-left">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Center Segment: Desktop Navigation Links */}
      <div className="hidden lg:flex justify-between items-center flex-1 mx-auto max-w-xl px-4">
        <nav className="w-full flex items-center justify-between gap-2">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/skills" title="Skills" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/experience" title="Experience" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
      </div>

      {/* Right Segment: Social Icons */}
      <div className="hidden lg:flex items-center justify-center gap-4">
        <motion.a
          target="_blank"
          className="w-6 h-6 text-textMuted hover:text-primary transition-colors duration-300"
          href="https://www.facebook.com/muhammad.zain.ul.abideen.105909"
          whileHover={{ y: -2, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </motion.a>
        <motion.a
          target="_blank"
          className="w-6 h-6 text-textMuted hover:text-primary transition-colors duration-300"
          href="https://www.instagram.com/zain_the_loser10000/"
          whileHover={{ y: -2, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          target="_blank"
          className="w-6 h-6 text-textMuted hover:text-primary transition-colors duration-300"
          href="https://www.linkedin.com/in/muhammad-zain-ul-abideen-270581272/"
          whileHover={{ y: -2, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </motion.a>
      </div>

      {/* Hamburger Menu Toggle Button */}
      <button
        type="button"
        className="flex lg:hidden flex-col items-center justify-center bg-transparent border-0 gap-1.5 z-[110] cursor-pointer p-2 rounded-md hover:bg-white/5 transition-colors"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Modal Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // FIX: Boosted z-index to z-[105] to stay safely on top of the home page elements,
            // and swapped bg-dark/98 for a solid hex code color variable to guarantee opacity.
            className="w-screen h-screen flex justify-center items-center flex-col fixed top-0 left-0 z-[105]"
            style={{ backgroundColor: "#0b0b0f" }}
          >
            {/* Soft decorative blur inside the menu wrapper */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: "300px",
                height: "300px",
                background: "var(--primary)",
                filter: "blur(130px)",
                opacity: 0.2,
              }}
            />

            <nav className="flex items-center justify-center flex-col w-full max-w-sm px-6 relative z-10 pt-12">
              <CustomMobileLink toggle={handleClick} href="/" title="Home" />
              <CustomMobileLink
                toggle={handleClick}
                href="/about"
                title="About"
              />
              <CustomMobileLink
                toggle={handleClick}
                href="/skills"
                title="Skills"
              />
              <CustomMobileLink
                toggle={handleClick}
                href="/projects"
                title="Projects"
              />
              <CustomMobileLink
                toggle={handleClick}
                href="/experience"
                title="Experience"
              />
              <CustomMobileLink
                toggle={handleClick}
                href="/contact"
                title="Contact"
              />
            </nav>

            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center justify-center gap-6 mt-6 relative z-10">
              <motion.a
                target="_blank"
                className="w-8 h-8 text-textMuted hover:text-primary transition-colors duration-300"
                href="https://www.facebook.com/muhammad.zain.ul.abideen.105909"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                target="_blank"
                className="w-8 h-8 text-textMuted hover:text-primary transition-colors duration-300"
                href="https://www.instagram.com/zain_the_loser10000/"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                target="_blank"
                className="w-8 h-8 text-textMuted hover:text-primary transition-colors duration-300"
                href="https://www.linkedin.com/in/muhammad-zain-ul-abideen-270581272/"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
