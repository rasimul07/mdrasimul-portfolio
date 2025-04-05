"use client";
import { Contact } from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const [isTop, setIsTop] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 0) {
      setIsTop(false);
    }else{
      setIsTop(true);
    }
  });
  return (
    <div>
      <div className="h-screen bg-[url('/bg1.jpeg')] bg-center bg-cover flex flex-col bg-slate-200">
        <Navbar isTop={isTop} />
        <div className="flex flex-1 justify-between">
          <div className="w-4/12 p-4 h-full flex justify-center items-center">
            <div>
              <strong>Md Rasimul Islam</strong>
              <br />
              <strong>Full stack developer</strong>
              <p>
                Highly passionate to my work, open mind and eager to learn new
                things.
              </p>
              <strong>
                <a
                  href="https://drive.google.com/file/d/1sfCBFkxHZAZr7xl1Ok5jDMPCllSou-u0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </strong>
              <br />
              <strong>Hire me</strong>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
