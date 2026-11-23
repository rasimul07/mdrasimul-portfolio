import React from "react";
import { calculateAge } from "./helperFunction";
import { Award, BookOpen, ExternalLink, GraduationCap, Languages, MapPin, UserCheck } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Maulana Abul Kalam Azad University And Technology",
    location: "Nadia, WB, India",
    date: "2020 – 2024",
    description:
      "Comprehensive curriculum focusing on Software Engineering, Data Structures & Algorithms, Operating Systems, Web Technologies, and Machine Learning.",
    grade: "8.45 CGPA",
  },
  {
    title: "Higher Secondary (10+2)",
    institution: "Rahimpur Nabagram High School",
    studiedAt: "Al-Ameen Mission, Khalatpur",
    date: "2017 – 2019",
    description: "Completed higher secondary education with distinction in Physics, Chemistry, Mathematics, and Biology (PCMB).",
    grade: "84%",
  },
];

const certifications = [
  {
    title: "Certified Internship (Web Development)",
    issuer: "Oasis Infobyte",
    credentialUrl:
      "https://drive.google.com/file/d/1zDC2mFtDGx0OqHnCkxaMiujTYzc-l-1e/view?usp=sharing",
    description:
      "Verified internship credential for developing production-grade web applications, responsive layouts, and interactive tools.",
  },
  {
    title: "Full Stack Open Source Course",
    issuer: "Open Source Specialization",
    credentialUrl:
      "https://drive.google.com/file/d/1oivK8VnmZx9LX5kOVPnJ-e-7-JWPuoVP/view?usp=sharing",
    description:
      "Hands-on program covering modern full-stack development, Git workflows, community contribution standards, and scalable architectures.",
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Bengali", level: "Native" },
];

const coursework = [
  "Data Structures & Algorithms (DSA)",
  "Database Management Systems (DBMS)",
  "Computer Networks (CN)",
  "Operating Systems (OS)",
  "Object-Oriented Programming (OOPS)",
  "Problem Solving",
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-white to-gray-100 text-gray-800 py-16 px-6 space-y-12">
      <div className="text-center max-w-3xl space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
          About Me
        </h2>
        <p className="text-slate-600 text-base md:text-lg">
          Full Stack Developer with professional experience building scalable web and mobile applications using modern web technologies.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-10">
        {/* Profile & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="md:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Professional Role</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">MD Rasimul Islam</h3>
              <p className="text-sm font-semibold text-slate-600">Full Stack &amp; Mobile Developer</p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-600">
                <MapPin size={18} className="text-rose-500 shrink-0" />
                <span>Malda, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-600">
                <UserCheck size={18} className="text-emerald-500 shrink-0" />
                <span>{calculateAge()} years old</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Languages
              </span>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    <Languages size={12} className="text-slate-500" />
                    <span>{lang.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({lang.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center space-y-4 md:pl-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Executive Summary</span>
            <p className="text-slate-700 leading-relaxed text-base">
              Full Stack Developer with professional experience building scalable <span className="font-semibold text-slate-900">web and mobile applications</span> using the <span className="font-semibold text-slate-900">MERN Stack, Next.js, React Native, and Ionic</span>. Experienced in developing secure REST APIs, responsive user interfaces, and <span className="font-semibold text-slate-900">real-time features</span> for production systems serving thousands of users.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Passionate about solving complex problems, writing clean, maintainable code, and continuously learning modern technologies to deliver impactful software solutions. My curiosity extends beyond code—I actively explore engineering best practices and scientific principles to broaden perspective and enhance system architecture.
            </p>

            <div className="pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Core Coursework &amp; Fundamentals
              </span>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-stone-100 text-stone-700 border border-stone-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2 rounded-xl bg-slate-100 text-slate-800">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Education</h3>
              <p className="text-xs text-slate-500">Academic background and qualifications</p>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-3 pl-6 space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white rounded-full border-4 border-slate-800 shadow-sm group-hover:border-blue-600 transition-colors" />
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-lg font-bold text-slate-800">
                      {item.title}
                    </h4>
                    <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                      {item.grade}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-600">
                    {item.institution} {item.location ? `• ${item.location}` : ""} • <span className="text-slate-500">{item.date}</span>
                  </p>
                  {item.studiedAt && (
                    <p className="text-xs font-medium text-slate-500">
                      Studied at: {item.studiedAt}
                    </p>
                  )}
                  <p className="text-sm text-slate-600 pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Verifications */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Award size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Certifications &amp; Credentials</h3>
              <p className="text-xs text-slate-500">Industry courses and verified credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-800 text-base">{cert.title}</h4>
                    <BookOpen size={18} className="text-slate-400 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{cert.description}</p>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline pt-2 w-fit"
                >
                  <span>View Verified Certificate</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
