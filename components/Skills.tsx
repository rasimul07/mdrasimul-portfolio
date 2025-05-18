"use client";
import React, { useRef, useState } from "react";
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
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const orbRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-center text-3xl font-bold mb-6">
          Skills
        </h2>
        <p className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-30">
          My key expertise and technical proficiencies
        </p>
        <div
          className="flex justify-center items-center "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div ref={orbRef} className="relative h-40 w-40 md:h-60 md:w-60">
            <Orb
              hue={200}
              hoverIntensity={isHovering ? 0.8 : 0.5}
              rotateOnHover={true}
              forceHoverState={isHovering}
              className="w-full h-full"
              size={
                typeof window !== "undefined" && window.innerWidth < 400
                  ? "sm"
                  : "md"
              }
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const radius =
                  typeof window === "undefined" || window.innerWidth < 400
                    ? 130
                    : 160;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 transform ${
                      hoveredSkill === index ? "scale-105 z-20" : "scale-100"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px) ${
                        hoveredSkill === index ? "scale(1.2)" : ""
                      }`,
                    }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border text-white ${
                        hoveredSkill === index
                          ? "bg-black/10 shadow-lg shadow-black/50 "
                          : "bg-black/10 backdrop-blur-sm"
                      }`}
                    >
                      {skill}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute -bottom-1/3 -left-1/3 w-full aspect-square rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-1/3 -right-1/3 w-full aspect-square rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Skills;
