
import React from "react";
import {
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Terminal,
} from "lucide-react";


import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";



const techStack = [
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express.js",
    image: "https://cdn.simpleicons.org/express/FFFFFF",
  },
  {
    name: "MongoDB",
    image: "https://cdn.simpleicons.org/mongodb/47A248",
  },
];


export default function Home() {
  const stats = [
    {
      number: "800+",
      label: "GFG Problems",
      icon: <Code2 size={20} />,
    },
    {
      number: "250+",
      label: "LeetCode Problems",
      icon: <Terminal size={20} />,
    },
    {
      number: "8.71",
      label: "CGPA / 10",
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-24 flex items-center">

      {/* Background gradients */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[130px] animate-pulse pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7 animate-[fadeInUp_0.8s_ease-out_both]">

          {/* Welcome badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm shadow-lg shadow-blue-500/5">
            <Sparkles size={16} className="animate-pulse" />
            Welcome to my portfolio
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping ml-1" />
          </div>

          {/* Name */}
          <div>
            <p className="text-gray-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              SAMPA {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                NAYAK
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl text-gray-200 font-semibold">
              Computer Science Engineering Student
            </h2>

            <p className="text-blue-400 text-base sm:text-lg font-semibold">
              Aspiring Software Engineer
              <span className="text-purple-400"> | </span>
              MERN STACK  Developer
              <span className="text-purple-400"> | </span>
              Java DSA
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-8 max-w-xl text-sm sm:text-base">
            I am a passionate final-year Computer Science Engineering student
            at Swami Vivekananda University. Currently working as an
            Infosys Springboard Intern, I enjoy building real-world
            applications, solving coding challenges, and exploring new
            technologies. My goal is to create useful, scalable, and
            user-friendly software solutions.
          </p>

          {/* Current status */}
          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Infosys Springboard Intern
            </div>

            <span className="text-gray-700">|</span>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={15} className="text-blue-400" />
              West Bengal, India
            </div>

          </div>


          {/* Technology Stack */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="group flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 animate-[fadeInUp_0.7s_ease-out_both]"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">

            {/* Download Resume */}
            <a
              href="/Sampa-Nayak-Resume.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:-translate-y-1 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </a>

            {/* Explore Projects */}
            <Link
              to="/project"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Explore My Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Contact Me */}
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              Contact Me
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <span className="text-sm font-semibold tracking-widest text-gray-400">
              FIND ME
            </span>

            <div className="w-10 h-[1px] bg-gradient-to-r from-blue-400 to-purple-500"></div>

            {/* GitHub */}
            <a
              href="https://github.com/Sampa321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sampa-nayak-5486a235a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            {/* Email */}
            <a
              href="mailto:sampanayak987@gmail.com"
              aria-label="Email"
              title="Email"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-400 hover:bg-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={21} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-6 border-t border-white/10">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-[fadeInUp_0.8s_ease-out_both]"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  {stat.icon}
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {stat.number}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT PROFILE SECTION */}
        <div className="flex justify-center items-center">

          <div className="relative w-72 h-72 sm:w-96 sm:h-96">

            {/* Outer glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />

            {/* Animated border */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-blue-400/30 animate-[spin_30s_linear_infinite]" />

            {/* Profile card */}
            <div className="relative w-full h-full rounded-full border border-blue-400/40 bg-gradient-to-br from-[#151c32] to-[#0c1020] flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">

              {/* Profile image */}
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-5 shadow-xl shadow-purple-500/20 transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/profile.jpeg"
                  alt="Sampa Nayak"
                  className="w-full h-full rounded-full object-cover border-4 border-[#151c32]"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Sampa Nayak
              </h3>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Developer & Problem Solver
              </p>

              <div className="flex items-center gap-2 text-gray-400 mt-4 text-sm">
                <MapPin size={16} className="text-blue-400" />
                West Bengal, India
              </div>

            </div>

            {/* Floating Java badge */}
            <div className="absolute -right-7 top-12 px-4 py-3 rounded-xl border border-blue-400/30 bg-[#151c32] shadow-xl shadow-blue-500/10 animate-[float_4s_ease-in-out_infinite]">
              <p className="text-blue-400 text-sm font-bold flex items-center gap-2">
                <Code2 size={17} />
                Java Developer
              </p>
            </div>

            {/* Floating React badge */}
            <div className="absolute -left-8 bottom-16 px-4 py-3 rounded-xl border border-purple-400/30 bg-[#151c32] shadow-xl shadow-purple-500/10 animate-[float_5s_ease-in-out_infinite]">
              <p className="text-purple-400 text-sm font-bold flex items-center gap-2">
                <Sparkles size={17} />
                React Developer
              </p>
            </div>

            {/* Floating full stack badge */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-5 py-3 rounded-xl border border-pink-400/30 bg-[#151c32] shadow-xl shadow-pink-500/10 animate-[float_4.5s_ease-in-out_infinite]">
              <p className="text-pink-400 text-sm font-bold whitespace-nowrap flex items-center gap-2">
                <BriefcaseBusiness size={16} />
                Full Stack Developer
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
