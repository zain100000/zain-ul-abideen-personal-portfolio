import React from "react";
import Head from "next/head";
import Contact from "@/components/Contact";
import TransitionEffect from "@/components/TransitionEffect";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Zain-ul-Abideen | Contact Me</title>
        <meta
          name="description"
          content="Get in touch with me!"
        />
      </Head>
      <TransitionEffect />
      <Contact />
    </>
  );
};

export default ContactPage;
