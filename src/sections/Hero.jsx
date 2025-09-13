import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";

const dynamicTexts = [
  "Hi, I’m Subhadip 👋",
  "Currently Looking for a Job",
  "I build Scalable MERN Apps",
  "Full-Stack Developer ",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // ms per character
    const pauseDuration = 1500; // pause after full text

    if (charIndex < dynamicTexts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + dynamicTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
   <section
  id="hero"
  className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 sm:px-10 md:px-20 
  pt-20  // 👈 Increased padding to avoid overlap
  
bg-gradient-to-br from-[#064b9aee] via-[#6505ae] to-[#a30799]
dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#000000]


  transition-colors duration-1000"
>
      {/* Left: Text */}
      <motion.div
        className="flex-1 mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 dark:text-white/70 max-w-md mx-auto md:mx-0">
         Aspiring Full-Stack Developer | Skilled in React, Node.js, Express & MongoDB | Open to any kind of Software Roles
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
         className="mt-6 inline-block px-6 py-3 
bg-gradient-to-r from-cyan-400 to-purple-500 
text-white font-semibold rounded-lg 
hover:from-cyan-500 hover:to-purple-600 
transition-all duration-300 shadow-lg"


        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Right: Image */}
      <motion.div
       className="w-60 h-60 rounded-full shadow-lg border-4 border-accent dark:border-accent-dark mt-8 md:mt-0 md:ml-12 justify-center bg-[#EBEBEB]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile}
          alt="Subhadip Profile"
         className="w-full h-full rounded-full object-contain"
        />
      </motion.div>
    </section>
  );
}
