"use client";

import React from "react";
import Orb from "./custom-ui/Orb";
import "./Skills.css"; // Assuming you have a CSS file for styling
const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "React",
  "Next.js",
  "React Native",
  "Redux",
  "MongoDB",
  "Express.js",
  "Node.js",
  "MySQL",
  "C++",
  "C",
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-center text-3xl font-bold mb-6">
          Skills
        </h2>

        <p className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          My key expertise and technical proficiencies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center group"
            >
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0} // Monochromatic
                forceHoverState={false}
                // className="w-full h-full transition-all duration-500 group-hover:scale-110"
                // monochrome={true} // Assuming your Orb component supports this
              />
              <p className="absolute inset-0 flex items-center justify-center text-blue-400 text-lg font-bold tracking-tight pointer-events-none z-10 opacity-90">
                {skill}
              </p>
              <div className="absolute inset-0 rounded-full border border-blue-600/20 group-hover:border-blue-600/40 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow effects (monochrome) */}
      <div className="absolute -bottom-1/3 -left-1/3 w-full aspect-square rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-1/3 -right-1/3 w-full aspect-square rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Skills;
