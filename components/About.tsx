import React from "react";
import { calculateAge } from "./helperFunction";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Maulana Abul Kalam Azad University Of Technology",
    date: "2020 - 2024",
    description:
      "Graduated with honors. Focused on software engineering, AI, algorithms and programming languages.",
    grade: "8.5 CGPA",
  },
  {
    title: "High School",
    institution: "Rahimpur Nabagram High School",
    studiedAt: "Al-Ameen Mission, Khalatpur",
    date: "2017 - 2019",
    description: "Completed with distinction in PMCB.",
    grade: "84%",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-white to-gray-100 text-gray-800 py-12 px-6 space-y-10">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-800">
        About Me
      </h2>

      <table className="w-full max-w-4xl table-auto text-left text-base">
        <tbody>
          <tr className="align-top">
            <th className="pr-6 py-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-600 font-semibold w-1/4">
              Introduction
            </th>
            <td className="py-4">
              I’m a{" "}
              <span className="font-semibold text-slate-700">
                goal-oriented
              </span>{" "}
              software developer driven by logic and a deep appreciation for{" "}
              <span className="font-semibold">well-researched</span> solutions.
              I take pride in delivering on every promise I make, consistently
              striving to leave <span className="italic">lasting value</span>{" "}
              through my work. My curiosity extends beyond code—I actively
              explore various{" "}
              <span className="underline decoration-slate-500">
                science subjects
              </span>{" "}
              to broaden my perspective and enhance my problem-solving
              capabilities.
            </td>
          </tr>
          <tr className="align-top">
            <th className="pr-6 py-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-600 font-semibold w-1/4">
              Age
            </th>
            <td className="py-4 text-slate-700 font-bold text-xl">
              {calculateAge()} years old
            </td>
          </tr>
          <tr className="align-top">
            <th className="pr-6 py-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-600 font-semibold w-1/4 align-top">
              Education
            </th>
            <td className="py-4">
              <div className="relative border-l-4 border-black pl-6 space-y-10">
                {educationData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[38px] top-1 w-6 h-6 bg-black rounded-full border-5 border-white shadow-md" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-slate-700">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {item.institution} • {item.date} • {item.grade}
                      </p>
                      {item.studiedAt && (
                        <h3 className="text-sm text-slate-700">
                          ({item.studiedAt})
                        </h3>
                      )}
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
