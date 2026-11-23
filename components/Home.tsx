/* eslint-disable @next/next/no-img-element */
import { useScroll, useMotionValueEvent } from "motion/react";
import React, { useState } from "react";
import Particles from "./custom-ui/Particles";
import RotatingText from "./custom-ui/Rotating";
import ShinyText from "./custom-ui/ShinyText";
import Navbar from "./Navbar";
import Magnet from "./custom-ui/Magnet";
import PixelTransition from "./custom-ui/PixelTransition";
import MyNameSpotLight from "./custom-ui/MyNameSpotLight";
import { handleScrollToFeatures } from "./ScrollBehaviour";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const [isTop, setIsTop] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  });

  return (
    <div className="h-screen bg-black flex flex-col relative w-screen overflow-x-hidden">
      <Navbar isTop={isTop} />
      <div
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="grid grid-rows-12 md:grid-cols-12 h-full relative z-10">
        <div className="row-span-5 md:row-span-12 md:col-span-5 p-4 flex justify-center items-end md:items-center md:h-screen">
          <div className="space-y-4 max-w-md text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 w-full justify-center md:justify-start">
              <p className="text-xl md:text-3xl font-semibold text-secondary uppercase tracking-wider">
                PASSIONATE
              </p>
              <RotatingText
                texts={[
                  "Full Stack Developer",
                  "Mobile App Engineer",
                  "MERN & Next.js Specialist",
                ]}
                mainClassName="text-slate-300 whitespace-nowrap text-xl md:text-3xl font-semibold overflow-hidden justify-center md:justify-start rounded-lg italic"
                staggerFrom={"random"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                splitBy="characters"
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
              />
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Full Stack Developer with professional experience building scalable web and mobile applications using the MERN Stack, Next.js, React Native, and Ionic with real-time systems and secure REST APIs.
            </p>

            {/* Resume & Hire Me Buttons */}
            <div className="space-x-4 flex justify-center md:justify-start items-center pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer z-20"
              >
                <ShinyText
                  text="Resume PDF"
                  disabled={false}
                  speed={3}
                  className="border border-white/80 hover:border-white rounded-full text-base md:text-lg px-4 py-1.5 font-semibold transition"
                />
              </a>
              <div className="z-20">
                <Magnet
                  padding={30}
                  disabled={false}
                  magnetStrength={1}
                  onClick={() => handleScrollToFeatures("Contact")}
                >
                  <ShinyText
                    text="Hire me!"
                    disabled={false}
                    speed={3}
                    className="border border-white/80 hover:border-white rounded-full text-base md:text-lg px-4 py-1.5 font-semibold cursor-pointer transition"
                  />
                </Magnet>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-3">
              <a
                href="https://github.com/rasimul07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-rasimul-islam-b390b3209/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-600/30 text-sky-400 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/RasimulIslam890/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-amber-600/30 text-amber-400 transition-all hover:scale-110"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
              >
                <Code size={18} />
              </a>
              <a
                href="mailto:rasimulislam722@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600/30 text-rose-400 transition-all hover:scale-110"
                aria-label="Send Email"
                title="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="row-span-7 md:row-span-12 md:col-span-7 flex flex-col justify-center items-center space-y-4 md:h-screen">
          <PixelTransition
            firstContent={
              <img
                src="./profile.jpg"
                alt="Md Rasimul Islam Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: "#ffffff",
                  }}
                  className="text-center leading-none px-4"
                >
                  Welcome to my portfolio
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <div>
            <MyNameSpotLight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
