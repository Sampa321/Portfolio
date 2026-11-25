
import React from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  GraduationCap,
  CalendarDays,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Infosys Springboard Internship",
    organization: "Infosys Springboard",
    type: "Internship",
    period: "2026",
    description:
      "A professional learning experience focused on developing technical knowledge and improving software development skills.",
    responsibilities: [
      "Participating in structured technical learning.",
      "Strengthening programming and problem-solving skills.",
      "Learning through professional development activities.",
    ],
    technologies: ["Java", "Programming", "Problem Solving"],
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    current: true,
  },
  {
    id: 2,
    title: "MediStock",
    organization: "Medical Inventory Management Platform",
    type: "Team Project",
    period: "2026",
    description:
      "A team-based web application designed to manage medical inventory, medicines, suppliers, stock levels, and purchase operations.",
    responsibilities: [
      "Contributing to frontend development.",
      "Developing login and signup user interfaces.",
      "Working with the team on a role-based inventory management platform.",
    ],
    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
    ],
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/springboardmentor93924a-prog/Medical-platform/tree/team3-Sampa",
  },
  {
    id: 3,
    title: "Vettly",
    organization: "Interview & Assessment Platform",
    type: "Final-Year Project",
    period: "2026",
    description:
      "A web-based platform focused on interview management and candidate assessment as part of a final-year project.",
    responsibilities: [
      "Contributing to the development of the platform.",
      "Working with frontend and backend technologies.",
      "Learning practical application development and team collaboration.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
    github: "https://github.com/outgoingrudra/Vettly/tree/FinalYearProject-Sampa",
  },
];

export default function Experience() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-20">

      {/* Background Glow */}
      <div className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-100px] w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 animate-experience-in">
          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-5">
            <BriefcaseBusiness size={16} />
            MY JOURNEY
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
            My internship experience, practical project work, and continuous
            journey of learning and growing as a software developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 sm:-translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <div
                  key={item.id}
                  style={{ animationDelay: `${index * 180}ms` }}
                  className={`relative flex items-start sm:items-center animate-experience-in opacity-0 [animation-fill-mode:forwards] ${
                    isRight ? "sm:flex-row-reverse" : ""
                  }`}
                >

                  {/* Timeline Icon */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#101729] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Icon size={18} className="text-blue-400" />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-40px)] group bg-[#101729] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(37,99,235,0.12)] transition-all duration-500`}
                  >

                    {/* Card Top */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}
                      >
                        <Sparkles size={13} />
                        {item.type}
                      </span>

                      <span className="flex items-center gap-2 text-gray-400 text-sm">
                        <CalendarDays size={15} />
                        {item.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h2>

                    <p className="text-blue-400 text-sm font-medium mb-4">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-7 mb-6">
                      {item.description}
                    </p>

                    {/* Responsibilities */}
                    <h3 className="text-white font-semibold text-sm mb-3">
                      Key Highlights
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {item.responsibilities.map((responsibility, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-6"
                        >
                          <span className="w-2 h-2 mt-2 shrink-0 rounded-full bg-blue-400" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-white font-semibold text-sm mb-3">
                        Technologies & Skills
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        <GitBranch size={16} />
                        View Project on GitHub
                        <ExternalLink size={14} />
                      </a>
                    )}

                  </div>

                  {/* Empty opposite timeline column */}
                  <div className="hidden sm:block w-[calc(50%-40px)]" />

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-blue-500/20 rounded-2xl p-8 sm:p-12 animate-experience-in">
          <Sparkles size={35} className="text-blue-400 mx-auto mb-5" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Always Learning, Always Building
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-7">
            I am looking forward to gaining more practical experience,
            building meaningful applications, and contributing to
            real-world software development projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Explore Projects
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
