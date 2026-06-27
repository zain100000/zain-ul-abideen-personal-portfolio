import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import emailjs from "@emailjs/browser";

// Import anime character for contact section
import Gojo from "../../public/images/gojo.jpg";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, sent, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus("sending");

  try {
    const serviceId = "service_p46acta";
    const templateId = "template_hdedtcs";
    const publicKey = "mNslJ5eoLJyCPmxdG";

    const templateParams = {
      name: formData.name,        // Matches {{name}} in template
      email: formData.email,      // Matches {{email}} in template  
      title: formData.name,       // Matches {{title}} in template subject
      message: formData.message,  // Matches {{message}} in template body
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    setFormStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus("idle"), 5000);
  } catch (error) {
    console.error("Failed to send message:", error);
    setFormStatus("error");
    setTimeout(() => setFormStatus("idle"), 4000);
  }
};

  return (
    <div className="mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32 px-3 sm:px-4 md:px-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
        <AnimatedText
          text="Contact Me"
          className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white 
            tracking-[-1px] sm:tracking-[-2px] mb-3 sm:mb-4 text-center"
        />
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4">
          Get in touch for collaborations!
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* LEFT SIDE - Full Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              <div className="absolute inset-[-10%] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-neutral-900 to-black">
                <Image
                  src={Gojo}
                  alt="Gojo Satoru"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-purple-300 whitespace-nowrap bg-black/90 px-4 py-1.5 rounded-full border border-purple-500/30 shadow-lg backdrop-blur-sm">
                "The strongest"
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 80,
              delay: 0.2,
            }}
            className="bg-gradient-to-br from-neutral-900/95 via-neutral-950/95 to-black/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-500/20 shadow-2xl shadow-purple-500/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📨</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Send a Message
              </h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Your Name
                </label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your name"
                    disabled={formStatus === "sending"}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                    disabled={formStatus === "sending"}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Message
                </label>
                <div className="relative group">
                  <FaComment className="absolute left-4 top-4 text-neutral-500 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-12 pr-4 py-3.5 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    disabled={formStatus === "sending"}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === "sending"}
                whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
                whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
                className={`relative w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden group
                  ${formStatus === "idle" ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/30" : ""}
                  ${formStatus === "sending" ? "bg-neutral-700 cursor-wait" : ""}
                  ${formStatus === "sent" ? "bg-green-600 cursor-default" : ""}
                  ${formStatus === "error" ? "bg-red-600 cursor-default" : ""}
                `}
              >
                {formStatus === "idle" && (
                  <>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Message
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                )}
                {formStatus === "sent" && (
                  <>
                    <FaCheckCircle />
                    Message Sent!
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    <FaExclamationTriangle />
                    Failed to send. Try again.
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
      </div>
    </div>
  );
};

export default Contact;
