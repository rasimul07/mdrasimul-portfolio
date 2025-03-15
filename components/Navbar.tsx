import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-[70px] w-full">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-4 h-full flex items-center pl-10">
          <Image src={"/logo.png"} alt="" height={120} width={120}></Image>
        </div>
        <div className="col-span-8 h-full flex items-center w-full">
          <li className="flex justify-evenly w-full">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Experience</ul>
            <ul>Projects</ul>
            <ul>Skills</ul>
            <ul>Blogs</ul>
            <ul>Contact</ul>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
