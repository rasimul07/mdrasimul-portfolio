// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col bg-slate-200">
        <div className="flex flex-1 justify-between">
          <div>Logo</div>
          {/* Left Content */}
          <div className="w-4/12 p-4">
            <p>Md Rasimul Islam</p>
            <p>Hire me</p>
          </div>

          {/* Responsive Triangle */}
          <div id="parent" className="w-8/12 relative border-dev"></div>
        </div>
      </div>
    </div>
  );
}
