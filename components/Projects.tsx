"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  accent: string;
  surface: string;
  imageFit?: "contain" | "cover";
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Full Stack GPA Finder",
    description:
      "Production GPA calculation and academic analysis platform for university students. Features SGPA, YGPA, DGPA, and percentage calculators, user authentication, credit-score storage, REST API integration, and personalized academic goal analysis on Next.js + MongoDB.",
    image: "/gpa/image.png",
    tags: ["Next.js", "Node.js", "Material UI", "JWT", "MongoDB", "Socket.io", "Git", "REST APIs"],
    liveUrl: "https://gpa.tool.mridev.in",
    githubUrl: "https://github.com/rasimul07/GPA-Calculalor-Using-NextJS",
    accent: "from-violet-500 to-indigo-600",
    surface: "from-violet-50/80 via-white to-indigo-50/60",
    imageFit: "contain",
  },
  {
    id: 2,
    title: "AI Skinify Mobile App",
    description:
      "Cross-platform Android application created for a final-year engineering project. Implements user authentication, secure skin image uploads, and feature-based skin condition prediction powered by Convolutional Neural Networks (CNN) with a Node.js & Express REST API backend.",
    image: "/skinify.svg",
    tags: [
      "React Native",
      "React Native Elements",
      "Node.js",
      "Express.js",
      "CNN (Deep Learning)",
      "REST APIs",
      "Git",
    ],
    githubUrls: [
      { label: "Client App", url: "https://github.com/rasimul07/SDD_Client_App" },
      { label: "AI Backend", url: "https://github.com/rasimul07/Skin_Disease_Detector_Backend" },
    ],
    accent: "from-rose-500 to-red-600",
    surface: "from-rose-50/80 via-white to-red-50/60",
    imageFit: "contain",
  },
  {
    id: 3,
    title: "IRCTC Tatkal Ticket Booking Assistant",
    description:
      "Automated IRCTC Tatkal booking Chrome extension and cross-platform companion mobile app featuring scheduled alarms, rapid passenger form autofill, status overlays, and payment gateway support. Built with TypeScript, Node.js API, PostgreSQL on Supabase, Docker, and CI/CD.",
    image: "/chrome-extension.png",
    tags: [
      "Chrome Extension",
      "TypeScript",
      "Node.js",
      "Express",
      "Ionic",
      "Capacitor",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "CI/CD",
    ],
    liveUrl: "https://www.rapidtatkal.tool.mridev.in/",
    githubUrl: "https://github.com/rasimul07/irctc-auto-ticket",
    accent: "from-amber-500 to-orange-600",
    surface: "from-amber-50/90 via-white to-orange-50/70",
    imageFit: "contain",
  },
];

type Project = ProjectItem;
type CardLayout = "stack" | "slide";

const MAX_TAGS = 6;

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const btnClass = compact ? "px-4 py-2 text-xs sm:text-sm" : "px-5 py-2.5 text-sm";

  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {hasLive && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.accent} ${btnClass} font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg`}
        >
          <ExternalLink size={compact ? 16 : 18} />
          Live Demo
        </a>
      )}

      {project.githubUrls ? (
        project.githubUrls.map((glink, i) => (
          <a
            key={i}
            href={glink.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white ${btnClass} font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50`}
          >
            <Github size={compact ? 16 : 18} />
            {glink.label}
          </a>
        ))
      ) : project.githubUrl && project.githubUrl !== "#" ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white ${btnClass} font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50`}
        >
          <Github size={compact ? 16 : 18} />
          Source Code
        </a>
      ) : null}
    </div>
  );
}

function ProjectTags({ tags, compact = false }: { tags: string[]; compact?: boolean }) {
  const visible = tags.slice(0, MAX_TAGS);
  const extra = tags.length - MAX_TAGS;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <span
          key={tag}
          className={`rounded-full border border-slate-200/80 bg-white/90 font-medium text-slate-700 shadow-xs ${
            compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs sm:text-sm"
          }`}
        >
          {tag}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-full border border-dashed border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
          +{extra} more
        </span>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  layout = "stack",
}: {
  project: Project;
  index: number;
  layout?: CardLayout;
}) {
  const isSlide = layout === "slide";

  return (
    <article
      className={`relative flex w-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] ${project.surface} ${
        isSlide
          ? "h-full max-h-[calc(100vh-6rem)] flex-col gap-5 p-5 sm:gap-6 sm:p-6 xl:flex-row xl:items-center xl:gap-8 xl:p-8"
          : "flex-col gap-5 p-5 sm:p-7"
      }`}
    >
      <div className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${project.accent} opacity-70`} />

      {!isSlide && (
        <span
          className={`w-fit rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs`}
        >
          Project {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div
        className={`relative shrink-0 ${
          isSlide ? "w-full xl:w-[46%]" : "w-full"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg ${
            isSlide ? "h-[200px] sm:h-[240px] md:h-[280px] xl:h-[min(58vh,520px)]" : "h-[220px] sm:h-[260px]"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full ${
              project.imageFit === "contain"
                ? "object-contain object-center p-3 sm:p-4"
                : "object-cover object-top"
            }`}
          />
        </div>
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col ${
          isSlide ? "justify-center overflow-y-auto xl:overflow-visible" : ""
        }`}
      >
        {isSlide && (
          <span
            className={`mb-3 w-fit rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs`}
          >
            Project {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <h3
          className={`font-extrabold tracking-tight text-slate-900 ${
            isSlide
              ? "text-xl leading-tight sm:text-2xl lg:text-3xl xl:text-4xl"
              : "text-2xl sm:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-3 leading-relaxed text-slate-600 ${
            isSlide
              ? "text-sm sm:text-base xl:text-[1.05rem] xl:leading-7"
              : "text-sm sm:text-base"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-4 sm:mt-5">
          <ProjectTags tags={project.tags} compact={isSlide} />
        </div>

        <div className="mt-5 sm:mt-6">
          <ProjectLinks project={project} compact={isSlide} />
        </div>
      </div>
    </article>
  );
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !horizontal) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      const getScrollAmount = () =>
        Math.max(horizontal.scrollWidth - window.innerWidth, 0);

      gsap.to(horizontal, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const sectionIntro = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-sm">
        Portfolio
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 sm:text-4xl lg:text-5xl">
        Featured Projects
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
        Full-stack web applications, AI-powered mobile apps, Chrome extensions, and production-grade backends with Docker &amp; CI/CD.
      </p>
    </>
  );

  return (
    <section className="relative bg-stone-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      {/* Mobile & tablet: vertical stack */}
      <div className="relative z-10 px-4 py-14 sm:px-6 sm:py-16 xl:hidden">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">{sectionIntro}</div>

        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} layout="stack" />
          ))}
        </div>
      </div>

      {/* Desktop xl+: horizontal scroll */}
      <div ref={sectionRef} className="relative z-10 hidden min-h-screen overflow-hidden xl:block">
        <div ref={horizontalRef} className="flex h-screen items-center">
          <div className="flex h-full w-screen shrink-0 items-center justify-center border-r border-slate-200/80 bg-white px-8">
            <div className="max-w-2xl text-center">
              {sectionIntro}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm">
                <span>Keep scrolling</span>
                <ArrowRight className="h-4 w-4 animate-pulse" />
              </div>
            </div>
          </div>

          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="flex h-full w-screen shrink-0 items-center justify-center border-r border-slate-200/70 px-6 py-8 2xl:px-12"
            >
              <div className="h-full w-full max-w-6xl">
                <ProjectCard project={project} index={index} layout="slide" />
              </div>
            </div>
          ))}

          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-white px-8">
            <div className="max-w-lg text-center">
              <p className="text-2xl font-bold text-slate-800 xl:text-3xl">More projects coming soon.</p>
              <p className="mt-4 text-base text-slate-600 lg:text-lg">
                I&apos;m constantly building scalable systems — feel free to explore my GitHub or reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
