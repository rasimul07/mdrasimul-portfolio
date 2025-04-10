import { useScroll, useMotionValueEvent } from "motion/react";
import React, { useState } from "react";
import Particles from "./custom-ui/Particles";
import RotatingText from "./custom-ui/Rotating";
import ShinyText from "./custom-ui/ShinyText";
import Navbar from "./Navbar";

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
    <div className="h-screen bg-black flex flex-col relative">
      <Navbar isTop={isTop} />

      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
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
      <div className="flex justify-between h-full">
        <div className="w-5/12 p-4 h-full flex justify-center items-center">
          <div className="">
            <h2 className="text-4xl font-mono tracking-wide text-[#FFFBCA] font-bold text-center">
              Md Rasimul Islam
            </h2>
            <p className="text-gray-500 text-center max-w-[30vw]">
              Highly passionate to my work, open mind and eager to learn new
              things.
            </p>
            <div className="space-x-4 flex justify-center items-center mt-5">
              <a
                href="https://drive.google.com/file/d/1sfCBFkxHZAZr7xl1Ok5jDMPCllSou-u0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyText
                  text="Resume"
                  disabled={false}
                  speed={3}
                  className="border border-white rounded-full px-2 font-semibold"
                />
              </a>

              <ShinyText
                text="Hire me!"
                disabled={false}
                speed={3}
                className="border border-white rounded-full px-2 font-semibold"
              />
            </div>
          </div>
        </div>
        <div className="w-7/12 h-full flex justify-center items-center">
          <div className="flex space-x-2 justify-center items-center">
            <p className="text-xl font-bold text-secondary">Creative</p>
            <RotatingText
              texts={["Full stack developer", "Content crator"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-secondary whitespace-nowrap text-xl font-bold text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
