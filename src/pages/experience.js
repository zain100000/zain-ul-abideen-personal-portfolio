import React from "react";
import Head from "next/head";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const ExperiencePage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Zain-ul-Abideen | Experience</title>
        <meta
          name="description"
          content="Explore my professional experience and background in web development, software engineering, and technical expertise."
        />
      </Head>
      <TransitionEffect />
      <Experience />
    </>
  );
};

export default ExperiencePage;
