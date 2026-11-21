 
import {
  Code2,
  ExternalLink,
  Layers,
  ArrowUpRight,
  Sparkles,
  FolderGit2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

// ================= TECHNOLOGY LOGOS =================

const techLogos = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  Express: "https://cdn.simpleicons.org/express/FFFFFF",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  Prisma: "https://cdn.simpleicons.org/prisma/FFFFFF",
  "Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  Java: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  JDBC: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
};

// ================= PROJECT DATA =================

const projects = [
  {
    title: "Vettly",
    category: "Interview & Assessment Platform",
    description:
      "A platform designed to manage recruitment, interviews, candidate assessments, and organization workflows.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    status: "Final Year Project",
    github: "https://github.com/outgoingrudra/Vettly/tree/FinalYearProject-Sampa",
    number: "01",
  },
  {
    title: "MediStock",
    category: "Medical Inventory Management",
    description:
    "A full-stack medical inventory management system designed to manage medicines, stock levels, suppliers, purchase orders, and medicine returns. Features role-based access for Admin, Pharmacist, Staff, and Supplier, along with inventory tracking, user management, and purchase order processing.",
    technologies: ["React", "Spring Boot", "Java", "MySQL", "Tailwind CSS"],
    icon: "🏥",
    color: "from-emerald-500 to-teal-500",
    status: "Team Project",
    github:
      "https://github.com/springboardmentor93924a-prog/Medical-platform/tree/team3-Sampa",
    number: "02",
  },
  {
    title: "E-Commerce App",
    category: "Full Stack Web Application",
    description:
      "A full-stack e-commerce application that allows users to browse products, manage shopping carts, place orders, and complete payments through Stripe or Cash on Delivery (COD). Includes user authentication, order management, product management, and an admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
    icon: "🛒",
    color: "from-purple-500 to-pink-500",
    status: "Personal Project", r: "06",
    github: "https://github.com/Sampa321/E-Commerce-App",
    number: "03",
  },

  {
    title: "Resume Builder App",
    category: "Full Stack Web Application",
    description:
      "A full-stack resume builder application that allows users to create, customize, and preview professional resumes using multiple templates. Includes AI-powered assistance for generating and improving resume summaries, skills, education, and work experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS"],
    icon: "📄",
    color: "from-blue-500 to-cyan-500",
    status: "Personal Project",
    github: "https://github.com/Sampa321/Resume-Builder-App",
    number: "04",
  },

  {
    title: "Bank Management System",
    category: "Java Desktop Application",
    description:
      "A banking management application built to practice Java programming, database connectivity, and CRUD operations.",
    technologies: ["Java", "MySQL", "JDBC"],
    icon: "🏦",
    color: "from-orange-500 to-amber-500",
    status: "Personal Project",
    github: "https://github.com/Sampa321/BankManagementSystem",
    number: "05",
  },
];

// ================= PROJECT PAGE =================

export default function Project() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-24">

      {/* Background Effects */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute top-[35%] right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_both]">

          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-6">
            <Layers size={16} />
            MY WORK
            <Sparkles size={15} className="animate-pulse" />
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            Here are some projects I have worked on while learning and
            developing my skills in software and web development.
            Each project represents my learning, creativity, and problem-solving journey.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7 text-gray-500 text-sm">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <FolderGit2 size={17} className="text-blue-400" />
            {projects.length} Featured Projects
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* ================= PROJECT CARDS ================= */}

        <div className="grid sm:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative bg-[#101729] border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden animate-[fadeInUp_0.8s_ease-out_both] hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] transition-all duration-500"
            >

              {/* Top Gradient Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}
              />

              {/* Hover Glow */}
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.color} opacity-0 blur-[90px] rounded-full group-hover:opacity-15 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Card Content */}
              <div className="relative z-10">

                {/* Project Header */}
                <div className="flex justify-between items-start mb-8">

                  {/* Project Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <span className="animate-[float_4s_ease-in-out_infinite]">
                      {project.icon}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="flex flex-col items-end gap-3">
                    <span className="text-gray-600 text-3xl font-black tracking-widest group-hover:text-blue-400/60 transition-colors">
                      {project.number}
                    </span>

                    <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Information */}
                <p className="text-sm text-blue-400 font-medium mb-2">
                  {project.category}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm leading-7 min-h-[84px]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-8">

                  <div className="flex items-center gap-2 mb-5">
                    <Code2 size={17} className="text-blue-400" />
                    <h3 className="text-sm text-gray-200 font-semibold">
                      Technologies Used
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">

                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={tech}
                        title={tech}
                        style={{
                          animationDelay: `${techIndex * 100}ms`,
                        }}
                        className="group/tech flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#080b16] border border-white/10 hover:border-blue-400/60 hover:bg-blue-500/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_both]"
                      >
                        {techLogos[tech] ? (
                          <img
                            src={techLogos[tech]}
                            alt={`${tech} logo`}
                            className="w-6 h-6 object-contain group-hover/tech:scale-125 group-hover/tech:rotate-6 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <Code2 className="w-6 h-6 text-blue-400" />
                        )}

                        <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover/tech:text-white transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

                {/* GitHub Link */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group/link transition-colors"
                  >
                    <FaGithub size={18} />
                    View on GitHub

                    <ArrowUpRight
                      size={17}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </a>

                  <span className="text-xs text-gray-600">
                    {project.status}
                  </span>

                </div>

              </div>
            </div>
          ))}

        </div>




        {/* MORE ON GITHUB */}
        <div className="mt-10 p-6 sm:p-8 bg-[#101729] border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              MORE ON GITHUB
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Explore all repositories — experiments, mini-tools,
              open-source contributions & works in progress.
            </p>
          </div>

          <a
            href="https://github.com/Sampa321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap"
          >
            <FaGithub size={20} />
            Visit GitHub
            <ArrowUpRight size={17} />
          </a>

        </div>



        {/* ================= BOTTOM CTA ================= */}

        <div className="relative group overflow-hidden mt-20 text-center bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 border border-blue-500/20 rounded-3xl p-8 sm:p-12 hover:border-blue-400/40 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]">

          <div className="absolute -top-24 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />

          <div className="relative">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Code2 size={32} className="text-blue-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Have a Project Idea?
            </h2>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-7">
              I am interested in building useful applications, collaborating
              with developers, and learning new technologies.
              Let's create something meaningful together!
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              Let's Connect
              <ExternalLink size={17} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
