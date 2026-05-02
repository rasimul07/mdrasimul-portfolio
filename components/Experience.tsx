"use client";
import React from "react";
import { Link, Globe, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    company: "First Penny Pvt Ltd",
    role: "Javascript Developer",
    date: "Nov 2024 - Present",
    logo: "/bi-3.png", // Ensure this path is correct in your public folder
    websiteUrl: "https://www.thefirstpenny.tech/",
    linkedinUrl: "https://www.linkedin.com/company/first-penny-software-private-limited/posts/?feedView=all",
    skills: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    description: "Developing robust web applications, optimizing performance, and building responsive user interfaces using modern JavaScript frameworks.",
  },
  // Add more experiences here!
];

const Experience = () => {
  return (
    <div className="py-24 bg-stone-50 min-h-[80vh] relative overflow-hidden flex flex-col justify-center">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My career journey and the amazing companies I've had the privilege to work with.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden"
            >
              {/* Subtle hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-400 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 shadow-sm">
                  {/* Using standard img tag for external URLs if needed, but Image is preferred for local */}
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow flex flex-col justify-center text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    {exp.role}
                  </h3>
                  <div className="flex items-center justify-center md:justify-end gap-2 text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm">
                    <Calendar size={16} className="text-slate-400" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold text-slate-800 mb-4">
                  <Briefcase size={20} />
                  <h4>{exp.company}</h4>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-sm font-medium rounded-md border border-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 border-t border-slate-100">
                  <a
                    href={exp.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors group/link"
                  >
                    <Globe size={18} className="group-hover/link:animate-pulse" />
                    Company Website
                  </a>
                  <a
                    href={exp.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors group/link"
                  >
                    <Link size={18} className="group-hover/link:rotate-45 transition-transform" />
                    LinkedIn Post
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

