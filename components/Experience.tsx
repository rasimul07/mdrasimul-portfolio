"use client";
import React from "react";
import { Link as LinkIcon, Globe, Calendar, Briefcase, MapPin, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  role: string;
  date: string;
  type: string;
  logo?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  certificateUrl?: string;
  skills: string[];
  responsibilities: {
    category: string;
    details: string;
  }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "First Penny Software Pvt Ltd",
    location: "Kolkata - 700144, India",
    role: "Javascript Developer",
    date: "Oct 2024 – Present",
    type: "Full-time",
    logo: "/bi-3.png",
    websiteUrl: "https://www.thefirstpenny.tech/",
    linkedinUrl: "https://www.linkedin.com/company/first-penny-software-private-limited/posts/?feedView=all",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Capacitor",
      "Ionic",
      "WebRTC",
      "FCM",
      "DigiLocker",
      "Payment Gateways",
      "Railway",
      "Hostinger VPS",
    ],
    responsibilities: [
      {
        category: "Frontend & Web",
        details:
          "Engineered responsive web applications and admin dashboards using React.js, Next.js, and Ionic React with role-based access control (RBAC).",
      },
      {
        category: "Backend & APIs",
        details:
          "Developed robust Node.js & Express.js REST APIs with MongoDB, managing scalable business workflows, CRM, and billing systems.",
      },
      {
        category: "Mobile Engineering",
        details:
          "Built cross-platform iOS & Android mobile apps using Capacitor, Android Studio, and Xcode with native integrations like iOS CallKit and PushKit; managed Google Play Console and App Store Connect submissions and releases.",
      },
      {
        category: "Real-time & Communication",
        details:
          "Implemented WebRTC for peer-to-peer voice & video calls, real-time chat infrastructure, Firebase Cloud Messaging (FCM) push notifications, and WhatsApp Business API.",
      },
      {
        category: "Third-party Integrations",
        details:
          "Integrated secure payment gateways, DigiLocker KYC verification, OTP login authentication, Google Maps live location tracking, and automated Indian GST filing (GSTR-1 and GSTR-3B).",
      },
      {
        category: "DevOps & Tooling",
        details:
          "Managed deployment and server infrastructure on Railway and Hostinger VPS, leveraging AI-assisted workflows with Claude, Cursor AI, and Gemini.",
      },
    ],
  },
  {
    id: 2,
    company: "Oasis Infobyte",
    location: "Remote",
    role: "Web Developer Intern",
    date: "Feb 2023 – Mar 2023",
    type: "Internship",
    certificateUrl:
      "https://drive.google.com/file/d/1zDC2mFtDGx0OqHnCkxaMiujTYzc-l-1e/view?usp=sharing",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "DOM Manipulation",
      "Frontend Development",
    ],
    responsibilities: [
      {
        category: "Web Development",
        details:
          "Designed and built responsive website landing pages, personal portfolio concepts, and interactive web tools utilizing clean semantic HTML5 and modern CSS3.",
      },
      {
        category: "Interactive Tools",
        details:
          "Developed a real-time temperature converter web application with instant unit calculation, form validation, and responsive mobile-first UI.",
      },
      {
        category: "Code Quality",
        details:
          "Practiced modern frontend development workflows, component reusability, cross-browser compatibility, and Git version control.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-24 bg-stone-50 min-h-[80vh] relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mt-2 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Hands-on software development experience across production web &amp; mobile systems, APIs, real-time communications, and cloud deployment.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-200/80 transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden"
            >
              {/* Subtle hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-600 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo / Badge Section */}
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-500 shadow-sm">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-700">
                      <Briefcase size={36} className="text-slate-500" />
                      <span className="text-[11px] font-bold mt-1 text-slate-600 text-center leading-tight">
                        {exp.company}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow flex flex-col justify-center text-left">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-lg font-semibold text-slate-700">
                        {exp.company}
                      </span>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:items-end gap-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-medium">
                      <Calendar size={14} className="text-slate-400" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 pl-1">
                      <MapPin size={13} className="text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bulleted Key Contributions */}
                <div className="my-5 space-y-2.5 bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Contributions &amp; Scope:
                  </h4>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">{resp.category}: </span>
                        <span className="text-slate-600">{resp.details}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  {exp.websiteUrl && (
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors group/link"
                    >
                      <Globe size={15} className="group-hover/link:animate-pulse" />
                      <span>Company Website</span>
                    </a>
                  )}
                  {exp.linkedinUrl && (
                    <a
                      href={exp.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors group/link"
                    >
                      <LinkIcon size={15} className="group-hover/link:rotate-45 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                    >
                      <Award size={15} />
                      <span>Verified Certificate</span>
                    </a>
                  )}
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
