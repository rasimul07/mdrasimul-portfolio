"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Orb from "./custom-ui/Orb";
import "./Skills.css";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "C",
  "C++",
  "React",
  "Next.js",
  "React Native",
  "Redux",
  "MongoDB",
  "Express.js",
  "Node.js",
  "MySQL",
  "TailwindCSS",
  "CSS",
];

const Skills = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Animation variants for staggering skills
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="min-h-[600px] bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Glow effects */}
      <div className="absolute -bottom-1/3 -left-1/3 w-full aspect-square rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-1/3 -right-1/3 w-full aspect-square rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text and Orb */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-lg mb-8">
            A comprehensive toolkit of languages, frameworks, and technologies I use to build robust and scalable applications.
          </p>
          
          <div className="relative h-48 w-48 md:h-64 md:w-64 flex-shrink-0 mb-8 lg:mb-0">
            <Orb
              hue={210}
              hoverIntensity={isHovering ? 0.9 : 0.6}
              rotateOnHover={true}
              forceHoverState={isHovering}
              className="w-full h-full"
              size="md"
            />
          </div>
        </div>

        {/* Right Side: Skills Grid */}
        <div className="flex-1 w-full max-w-2xl">
           <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 border border-slate-200/60 bg-white/60 backdrop-blur-md text-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:bg-blue-50/50 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

