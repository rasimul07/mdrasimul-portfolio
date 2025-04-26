import { useScroll, useMotionValueEvent } from "motion/react";
import React, { useState } from "react";
import Particles from "./custom-ui/Particles";
import RotatingText from "./custom-ui/Rotating";
import ShinyText from "./custom-ui/ShinyText";
import Navbar from "./Navbar";
import Magnet from "./custom-ui/Magnet";
import PixelTransition from "./custom-ui/PixelTransition";
import MyNameSpotLight from "./custom-ui/MyNameSpotLight";

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
      <div className="grid grid-rows-12 md:grid-cols-12 h-full">
        <div className="row-span-4 md:col-span-5 p-4 flex justify-center items-end md:items-center md:h-screen">
          <div className="space-y-2">
            <div className="flex justify-center items-center capitalize w-full ">
              <p className="text-xl md:text-3xl font-semibold text-secondary capitalize">
                CREATIVE
              </p>
              <RotatingText
                texts={["full stack developer", "content creator"]}
                mainClassName="text-slate-400 whitespace-nowrap text-xl md:text-3xl font-semibold overflow-hidden justify-center rounded-lg itallic w-full"
                staggerFrom={"random"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                splitBy="characters"
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <p className="text-gray-400 text-center a">
              I am highly passionate about my work, open-minded, and eager to
              learn new things. Honesty is in my blood.
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
                  className="border border-white rounded-full text-lg px-2 font-semibold"
                />
              </a>
              <Magnet padding={70} disabled={false} magnetStrength={2}>
                <ShinyText
                  text="Hire me!"
                  disabled={false}
                  speed={3}
                  className="border border-white rounded-full text-lg px-2 font-semibold"
                />
              </Magnet>
            </div>
          </div>
        </div>
        <div className="row-span-8 md:col-span-7 flex flex-col justify-center items-center space-y-4 md:h-screen">
          <PixelTransition
            firstContent={
              <img
                src="./profile.jpg"
                alt="default pixel transition content, a cat!"
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
                    fontSize: "3rem",
                    color: "#ffffff",
                  }}
                  className="text-center leading-none"
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
          <div className="">
            <MyNameSpotLight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
