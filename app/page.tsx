// import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-[url('/bg1.jpeg')] bg-center bg-cover flex flex-col bg-slate-200">
        <Navbar />
        <div className="flex flex-1 justify-between">
          {/* Left Content */}
          <div className="w-4/12 p-4 h-full flex justify-center items-center">
            <div className="">
              <strong>Md Rasimul Islam</strong>
              <br></br>
              <strong>Full stack developer</strong>
              <p>
                Highly passionate to my work, open mind and eager to learn new
                things.
              </p>
              <strong>Resume</strong>
              <br></br>
              <strong>Hire me</strong>
            </div>
          </div>

          {/* Responsive Triangle */}
          <div id="parent" className="w-8/12 relative"></div>
        </div>
      </div>
    </div>
  );
}
