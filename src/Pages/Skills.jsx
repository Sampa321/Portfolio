
import React from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
  Brain,
  Workflow
} from "lucide-react";

import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScollAnimation.js";

const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Building logic and solving problems",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },

    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Creating responsive user interfaces",
    icon: Monitor,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      }
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Developing APIs and server-side applications",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      }
    ],
  },

  {
    title: "Messaging & Integration",
    subtitle: "Managing asynchronous communication between applications",
    icon: Workflow,
    color: "from-amber-500 to-orange-500",
    skills: [
      {
        name: "RabbitMQ",
        logo: "https://cdn.simpleicons.org/rabbitmq/FF6600",
      },
    ],
  },
  {
    title: "Databases",
    subtitle: "Storing and managing application data",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    skills: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Prisma ORM",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      }
    ],
  },
  {
    title: "Tools & Technologies",
    subtitle: "Development and collaboration tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
       {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      }
    ],
  },
  {
  title: "AI & Technologies",
  subtitle: "Integrating AI into modern applications",
  icon: Brain,
  color: "from-violet-500 to-fuchsia-500",
  skills: [
    {
      name: "Gemini AI",
      logo: "https://cdn.simpleicons.org/googlegemini/8E75B2",
    },
  ],
},
];

// Reusable animated category card
function SkillCategory({ category, index }) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.12,
  });

  const Icon = category.icon;

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`group relative bg-[#101729] border border-white/10 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(37,99,235,0.12)] transition-all duration-500 ${isVisible
          ? "scroll-visible"
          : "scroll-hidden"
        }`}
    >
      {/* Top Gradient */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
      />

      {/* Card Heading */}
      <div className="flex items-center gap-4 mb-7">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
        >
          <Icon size={23} className="text-white" />
        </div>

        <div>
          <h2 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
            {category.title}
          </h2>

          <p className="text-gray-500 text-xs mt-1">
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 bg-[#080e1d] border border-white/5 rounded-xl p-3 hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-[1.03] transition-all duration-300"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-7 h-7 object-contain"
              loading="lazy"
            />

            <span className="text-gray-300 text-xs sm:text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const {
    elementRef: learningRef,
    isVisible: learningVisible,
  } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-20">

      {/* Background Effects */}
      <div className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-[45%] right-[-100px] w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-skills-in">
          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-5">
            <Code2 size={16} />
            MY TECHNICAL EXPERTISE
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
            Technologies and tools I use to build responsive websites,
            develop backend applications, manage databases, and solve
            programming problems.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Learning Section */}
        <div
          ref={learningRef}
          className={`mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 sm:p-10 ${learningVisible ? "scroll-visible" : "scroll-hidden"
            }`}
        >
          <Sparkles
            size={32}
            className="text-blue-400 mx-auto mb-5"
          />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Always Learning & Improving
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            I continuously improve my development skills through hands-on
            projects, coding practice, and exploring new technologies.
            My goal is to become a skilled full-stack software developer.
          </p>

          <Link
            to="/project"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            Explore My Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
