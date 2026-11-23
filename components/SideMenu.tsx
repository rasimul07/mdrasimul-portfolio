import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Youtube, FileText, Code } from "lucide-react";
import { sections } from "./Navbar";

const SideMenu = ({
  isOpenMenu,
  setIsOpenMenu,
}: {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpenMenu(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpenMenu && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenMenu(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
          
          {/* Side Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-[75vw] sm:w-[60vw] h-screen bg-stone-200 z-50 shadow-2xl flex flex-col pt-6 px-6 md:hidden border-l border-slate-300"
          >
            <div className="flex justify-end mb-12 mt-2">
              <button
                onClick={() => setIsOpenMenu(false)}
                className="p-2 rounded-full bg-slate-300/50 hover:bg-slate-400/50 transition-colors"
              >
                <X color="black" size={28} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 w-full">
              {sections.map((section, i) => (
                <motion.div
                  key={section}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => handleScrollTo(section)}
                  className="group relative cursor-pointer py-2"
                >
                  <span className="text-3xl font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 tracking-wide">
                    {section}
                  </span>
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]" />
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-300/80 mb-6 flex flex-col gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white font-medium text-sm shadow hover:bg-slate-800 transition-colors"
              >
                <FileText size={16} />
                <span>Resume (PDF)</span>
              </a>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/rasimul07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-300/60 hover:bg-slate-400/60 transition-colors text-slate-800"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-rasimul-islam-b390b3209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-300/60 hover:bg-slate-400/60 transition-colors text-sky-700"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/RasimulIslam890/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-300/60 hover:bg-slate-400/60 transition-colors text-amber-600"
                  aria-label="LeetCode"
                  title="LeetCode"
                >
                  <Code size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@codingmri7255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-300/60 hover:bg-slate-400/60 transition-colors text-red-600"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
