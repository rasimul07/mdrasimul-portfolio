"use client";
import React from "react";
import Image from "next/image";
import {
  Youtube,
  Github,
  Linkedin,
  ArrowUp,
  ExternalLink,
  FileText,
  Heart,
  Sparkles,
  Download,
} from "lucide-react";
import { handleScrollToFeatures } from "./ScrollBehaviour";

const socialLinks = [
  {
    name: "YouTube",
    handle: "@codingmri7255",
    description: "Code tutorials & development walkthroughs",
    url: "https://www.youtube.com/@codingmri7255",
    icon: Youtube,
    accentBorder: "hover:border-red-300",
    iconContainer: "bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white",
    badge: "bg-red-50 text-red-600 border-red-200",
    hoverText: "group-hover:text-red-600",
    hoverBg: "from-red-50/70 via-transparent to-transparent",
  },
  {
    name: "GitHub",
    handle: "rasimul07",
    description: "Open-source repositories & active projects",
    url: "https://github.com/rasimul07",
    icon: Github,
    accentBorder: "hover:border-slate-400",
    iconContainer: "bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    hoverText: "group-hover:text-slate-900",
    hoverBg: "from-slate-100/70 via-transparent to-transparent",
  },
  {
    name: "LinkedIn",
    handle: "Md Rasimul Islam",
    description: "Professional background & career journey",
    url: "https://www.linkedin.com/in/md-rasimul-islam-b390b3209/",
    icon: Linkedin,
    accentBorder: "hover:border-sky-300",
    iconContainer: "bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    hoverText: "group-hover:text-sky-600",
    hoverBg: "from-sky-50/70 via-transparent to-transparent",
  },
];

const navItems = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1kdxkWwJ4440SQlowrARaUViu_7HqUvzw/view?usp=sharing";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-slate-700 border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-stone-100/80 via-slate-50/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* Top Header & Callout */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 border border-stone-200 text-slate-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
            Let’s Build Something Amazing Together
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow my tech journey, explore my projects, or connect with me across platforms.
          </p>
        </div>

        {/* Social Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl overflow-hidden ${social.accentBorder}`}
              >
                {/* Subtle top-corner gradient sheen on hover */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${social.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-xs ${social.iconContainer}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border font-mono font-medium ${social.badge}`}
                    >
                      {social.handle}
                    </span>
                  </div>

                  <h4
                    className={`text-lg font-bold text-slate-900 transition-colors flex items-center gap-2 ${social.hoverText}`}
                  >
                    {social.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {social.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 transition-colors ${social.hoverText}`}
                >
                  <span>Visit Profile</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 border-t border-slate-200 border-b border-slate-200">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={38}
                height={38}
                className="opacity-95"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Md Rasimul Islam
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Passionate Software Developer specializing in modern web ecosystems,
              scalable architectures, and intuitive digital interfaces.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-600">
                Open to exciting opportunities &amp; collaborations
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollToFeatures(item)}
                  className="text-left text-slate-600 hover:text-slate-900 transition-colors py-1 cursor-pointer font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Resume & Documents */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Resume
            </h5>
            <p className="text-xs text-slate-600">
              View the updated resume online or download a local copy.
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={RESUME_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-xs group"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-blue-300" />
                  <span>View on Google Drive</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="/resume.pdf"
                download="Md_Rasimul_Islam_Resume.pdf"
                className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-medium hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs group"
              >
                <span className="inline-flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Download PDF</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  PDF
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Md Rasimul Islam. Developed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>and precision.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-slate-700 hover:text-slate-900 hover:bg-stone-200 transition-all cursor-pointer font-medium group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
