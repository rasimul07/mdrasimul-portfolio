// components/SideMenu.tsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";
import { sections } from "./Navbar";

const SideMenu = ({
  isOpenMenu,
  setIsOpenMenu,
}: {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );
    }

    return () => {
      if (menuRef.current) {
        gsap.to(menuRef.current, { x: "100%", duration: 0.5 });
      }
    };
  }, [isOpenMenu]);

  return (
    isOpenMenu && (
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-[40vh] w-[50vw] bg-white z-50 shadow-lg"
      >
        <div className="flex justify-end items-center h-[10%] px-4">
          <X
            className="cursor-pointer"
            color="black"
            size={30}
            onClick={() => setIsOpenMenu(false)}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-4">
          {sections.map((section, index) => (
            <span className="text-xl" key={index}>
              {section}
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default SideMenu;
