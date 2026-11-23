"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
  Smartphone,
  Cpu,
  BookOpen,
  Share2,
} from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    id: "languages",
    title: "Fundamentals & Core",
    icon: Code2,
    accent: "from-slate-600 to-slate-800",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "WebSocket",
      "Redis",
      "C",
      "C++",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: Layers,
    accent: "from-violet-500 to-indigo-600",
    skills: [
      "React.js",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    accent: "from-pink-500 to-rose-600",
    skills: [
      "React Native",
      "Ionic React",
      "Capacitor",
      "Expo",
      "Android Studio",
      "Xcode",
      "iOS CallKit & PushKit",
      "Google Play Console",
      "App Store Connect",
    ],
  },
  {
    id: "backend",
    title: "Backend & Real-Time",
    icon: Server,
    accent: "from-amber-500 to-orange-600",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebRTC (Audio/Video)",
      "Socket.io",
      "FCM Push Notifications",
      "WhatsApp Business API",
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    icon: Database,
    accent: "from-emerald-500 to-teal-600",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    id: "integrations",
    title: "Integrations & Services",
    icon: Share2,
    accent: "from-blue-500 to-indigo-600",
    skills: [
      "Payment Gateways",
      "DigiLocker Verification",
      "OTP Authentication",
      "Google Maps",
      "Ola Maps",
      "GST Filing (GSTR-1 & 3B)",
      "Role-Based Access (RBAC)",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cloud,
    accent: "from-sky-500 to-blue-600",
    skills: [
      "Git",
      "GitHub Actions (CI/CD)",
      "Docker",
      "Docker Compose",
      "Railway",
      "Hostinger VPS",
      "AWS EC2",
      "Linux",
      "Nginx",
      "Vercel",
    ],
  },
  {
    id: "ai_tooling",
    title: "AI & Modern Workflow",
    icon: Cpu,
    accent: "from-purple-500 to-violet-600",
    skills: [
      "Claude",
      "Cursor AI",
      "Gemini",
      "LLM Tooling",
      "CNN (Deep Learning)",
      "VS Code",
      "Touch Typing",
      "macOS",
    ],
  },
  {
    id: "coursework",
    title: "Course Work & CS Core",
    icon: BookOpen,
    accent: "from-teal-500 to-emerald-600",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "DBMS",
      "Computer Networks (CN)",
      "Operating Systems (OS)",
      "Object-Oriented Programming (OOPS)",
      "Problem Solving",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280 } },
};

const Skills = () => {
  const totalSkills = skillCategories.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-[24rem] w-[24rem] rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <Braces className="h-4 w-4" />
            {totalSkills}+ Technologies &amp; Disciplines
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 md:text-5xl">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
            A comprehensive suite spanning full stack web, cross-platform mobile apps, real-time communications, production databases, cloud DevOps, and AI-accelerated workflows.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                variants={item}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{category.skills.length} skills</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
