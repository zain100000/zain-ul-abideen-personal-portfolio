import React from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

const SkillsPage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Zain-ul-Abideen | Skills</title>
        <meta
          name="description"
          content="Explore my technical skills including React Native, Node.js, MongoDB, and more. Dragon Ball themed skills showcase."
        />
      </Head>
      <TransitionEffect />
      <Skills />
    </>
  );
};

export default SkillsPage;
