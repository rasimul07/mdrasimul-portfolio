"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const sections = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Blogs",
  "Contact",
];
const Navbar = ({ isTop }: { isTop: boolean }) => {
  return (
    <nav className="fixed top-0 h-[70px] w-full z-50">
      <motion.div
        className="flex justify-between md:grid md:grid-cols-12 h-full w-full"
        animate={{
          backgroundColor: isTop
            ? "rgba(255,255,255,0)"
            : "rgba(255,255,255,1)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="md:col-span-4 h-full flex items-center md:ml-10 ml-4">
          <Image
            src="/logo.png"
            alt="Logo"
            height={100}
            width={120}
            className={` ${isTop ? "invert" : ""}`}
          />
        </div>
        <div className="md:hidden flex items-center justify-end pr-6">
          <Menu
            color={isTop ? "white" : "black"}
            size={25}
            className="h-full"
          />
        </div>
        <div className="md:col-span-8 h-full items-center w-full hidden md:flex">
          <ul className="flex justify-evenly w-full">
            {sections.map((section, index) => (
              <motion.div
                className={`relative inline-block cursor-pointer ${
                  isTop ? "text-white" : "text-black"
                } `}
                whileHover="hover"
                initial="rest"
                animate="rest"
                key={index}
              >
                <span>{section}</span>
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-blue-600"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ originX: 0, width: "100%" }}
                />
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
