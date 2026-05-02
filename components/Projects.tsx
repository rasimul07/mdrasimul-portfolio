"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Easily replace these with your own project images and links!
const projectsData = [
  {
    id: 1,
    title: "GPA Calculator",
    description: "A robust GPA calculator for university students with an intuitive interface.",
    image: "/gpa/image.png", // Replace with your image paths
    tags: ["React", "TailwindCSS"],
    liveUrl: "#", 
    githubUrl: "#",
    color: "bg-stone-50",
  },
  {
    id: 2,
    title: "Demo Project 2",
    description: "Description of your second project goes here.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Placeholder
    tags: ["Next.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-stone-100",
  },
  {
    id: 3,
    title: "Demo Project 3",
    description: "Description of your third project goes here.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", // Placeholder
    tags: ["TypeScript", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-stone-50",
  },
  {
    id: 4,
    title: "Demo Project 4",
    description: "Description of your fourth project goes here.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder
    tags: ["React Native", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-stone-100",
  },
];

const Projects = () => {
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    if (!horizontal) return;

    // Use a function to calculate the scroll amount dynamically, 
    // which handles mobile resize events (address bar hiding/showing) perfectly.
    const getScrollAmount = () => {
      return horizontal.scrollWidth - window.innerWidth;
    };

    const tween = gsap.to(horizontal, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal.parentElement as HTMLElement,
        pin: true,
        scrub: 1, // Add a slight smoothing
        end: () => `+=${getScrollAmount()}`,
        invalidateOnRefresh: true, // Recalculates on mobile resize
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden bg-stone-200">
      <div ref={horizontalRef} className="flex h-full mt-[70px]">
        {/* Title Slide */}
        <div className="slide flex-none w-screen h-screen flex flex-col justify-center items-center text-center px-4 bg-white border-r border-slate-200">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl">
            Keep scrolling to explore my work.
          </p>
          <div className="mt-12 animate-bounce">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Project Slides */}
        {projectsData.map((project) => (
          <div key={project.id} className={`slide flex-none w-screen h-screen flex flex-col md:flex-row justify-center items-center p-8 md:p-24 border-r border-slate-200 ${project.color}`}>
            {/* Image side */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 mb-8 md:mb-0 md:mr-12 group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Text side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-full shadow-sm border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a href={project.liveUrl} className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href={project.githubUrl} className="flex items-center gap-2 text-lg font-semibold text-slate-700 hover:text-black transition-colors">
                  <Github size={20} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
