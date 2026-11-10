
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Target,
  Mail,
  Phone,
  Download,
  Award,
  MapPin,
  Calendar,
  Sparkles,
  BookOpen,
  ExternalLink,
} from "lucide-react";

// ================= TECHNICAL SKILLS =================

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    description: "Building logic and solving programming problems.",
    skills: [
      {
        name: "Java",
        level: 85,
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        level: 80,
        image: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "Python",
        level: 65,
        image: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "C",
        level: 60,
        image: "https://cdn.simpleicons.org/c/A8B9CC",
      },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    description: "Creating modern and responsive user interfaces.",
    skills: [
      {
        name: "HTML5",
        level: 90,
        image: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        level: 85,
        image: "https://cdn.simpleicons.org/css/663399",
      },
      {
        name: "JavaScript",
        level: 80,
        image: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "React.js",
        level: 80,
        image: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Tailwind CSS",
        level: 80,
        image: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "Bootstrap",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      }
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    description: "Developing server-side applications and REST APIs.",
    skills: [
       {
        name: "Java",
        level: 85,
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Node.js",
        level: 75,
        image: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      {
        name: "Express.js",
        level: 75,
        image: "https://cdn.simpleicons.org/express/FFFFFF",
      },
      {
        name: "Spring Boot",
        level: 35,
        image: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    description: "Working with relational and NoSQL databases.",
    skills: [
      {
        name: "MySQL",
        level: 75,
        image: "https://cdn.simpleicons.org/mysql/4479A1",
      },
      {
        name: "MongoDB",
        level: 75,
        image: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "PostgreSQL",
        level: 65,
        image: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "Prisma ORM",
        level: 55,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      }
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    description: "Tools used for development and collaboration.",
    skills: [
      {
        name: "Git",
        level: 80,
        image: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "GitHub",
        level: 85,
        image: "https://cdn.simpleicons.org/github/FFFFFF",
      },
      {
        name: "VS Code",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        level: 80,
        image: "https://cdn.simpleicons.org/intellijidea/FFFFFF",
      },
      {
        name: "Postman",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      }
    ],
  },
  {
    title: "Currently Learning",
    icon: "📚",
    description: "Technologies I am exploring to expand my knowledge.",
    skills: [
      {
        name: "TypeScript",
        level: 40,
        image: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Next.js",
        level: 40,
        image: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      },
      {
        name: "Advanced Spring Boot",
        level: 55,
        image: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
      {
        name: "Advanced Backend",
        level: 50,
        image: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
    ],
  },
];

// ================= EDUCATION =================

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Swami Vivekananda University",
    location: "Kolkata, West Bengal, India",
    year: "2023 – 2027",
    score: "CGPA: 8.71 / 10",
  },
  {
    degree: "Higher Secondary (Class 12)",
    institution: "Paniparul Mukteswar High School",
    location: "West Bengal, India",
    board: "WBCHSE",
    year: "2023",
    score: "Percentage: 78.89%",
  },
  {
    degree: "Secondary (Class 10)",
    institution: "Dubda D. Birendra Vidhyapith",
    location: "West Bengal, India",
    board: "WBBSE",
    year: "2021",
    score: "Percentage: 81%",
  },
];

// ================= EXPERIENCE =================

const experiences = [
  {
    role: "Infosys Springboard Intern",
    organization: "Infosys Springboard",
    startdate: "30-09-2026",
    description:
      "Participating in learning and professional development through the Infosys Springboard program.",
  },
];

// ================= INTERNSHIP DOCUMENTS =================

const experienceImages = [
  {
    title: "Infosys Springboard",
    subtitle: "Internship Offer Letter",
    image: "/experience/infosysOfferLetter.jpeg",
    type: "Offer Letter",
  },
  {
    title: "Infosys Springboard",
    subtitle: "Internship Achievement",
    image: "/experience/InfosysSpringBoardInternshipAchievement.png",
    type: "Achievement",
  },
];

// ================= MEDISTOCK DASHBOARDS =================

const mediStockDashboards = [
  {
    title: "Admin Dashboard",
    description: "System-wide inventory monitoring and user management.",
    image: "/experience/medistock/admin-dashboard.png",
  },
  {
    title: "Pharmacist Dashboard",
    description: "Medicine inventory, expiry tracking and purchase orders.",
    image: "/experience/medistock/pharmacist-dashboard.png",
  },
  {
    title: "Staff Dashboard",
    description: "Stock checking, medicine search and receiving operations.",
    image: "/experience/medistock/staff-dashboard.png",
  },
  {
    title: "Supplier Dashboard",
    description: "Supplier-related information and purchase activities.",
    image: "/experience/medistock/supplier-dashboard.png",
  },
];

// ================= ACHIEVEMENTS =================

const achievements = [
  {
    title: "Programming in Java",
    organization: "NPTEL ONLINE CERTIFICATION",
    result: "Elite + Silver",
    score: "88%",
    year: "Jul-Oct 2025",
    image: "/certifications/JavaNPTEL.png",
  },
  {
    title: "Design and Analysis of Algorithms",
    organization: "NPTEL ONLINE CERTIFICATION",
    result: "Course Achievement",
    score: "55%",
    year: "Jan-Mar 2025",
    image: "/certifications/AlgorithmsNPTEL.png",
  },
  {
    title: "Java Foundation Certification",
    organization: "Infosys Springboard",
    result: "Certificate Of Achievement",
    score: "",
    year: "APRIL 11, 2026",
    image: "/certifications/JavaInfosys.png",
  },
  {
    title: "Training On REACT",
    organization: "Ardent Computech Pvt. Ltd.",
    result: "Certificate Of Completion",
    score: "",
    year: "APRIL 06, 2024 to JULY 31, 2024",
    image: "/certifications/ReactArdent.png",
  },
];

// ================= CODING PROFILES =================

const codingProfiles = [
  {
  name: "GeeksforGeeks",
  description: "800+ Problems Solved",
  score: "1807 Score",
  image: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46",
  url: "https://www.geeksforgeeks.org/user/sampanas3m4u/",
  color: "hover:border-green-400/50",
  textColor: "text-green-400",
},
{
  name: "LeetCode",
  description: "250+ Problems Solved",
  score: "Rank: 6,43,964",
  image: "https://cdn.simpleicons.org/leetcode/FFA116",
  url: "https://leetcode.com/u/Sampa_Nayak1/",
  color: "hover:border-yellow-400/50",
  textColor: "text-yellow-400",
},
{
  name: "Code360",
  description: "840 Problems Solved",
  score: "82450 Score",
  image: "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",
  url: "https://www.naukri.com/code360/profile/b418e100-3cb4-4507-8487-325d51d979be",
  color: "hover:border-purple-400/50",
  textColor: "text-purple-400",
},
];

// ================= REUSABLE SECTION TITLE =================

function SectionTitle({ label, title, description, icon: Icon }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
        {Icon && <Icon size={15} />}
        {label}
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold mt-5">
        {title}
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
        {description}
      </p>
    </div>
  );
}

// ================= INTERACTIVE SKILLS =================

function SkillTabs() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const selectedCategory = skillCategories.find(
    (category) => category.title === activeCategory
  );

  return (
    <div className="mb-20">

      <SectionTitle
        label="MY TECHNOLOGIES"
        title={
          <>
            Technical <span className="text-blue-400">Skills</span>
          </>
        }
        description="Explore my programming languages, frontend and backend technologies, databases, development tools, and current learning journey."
        icon={Code2}
      />

      {/* Category Buttons */}

      <div className="flex flex-wrap justify-center gap-3 mb-9">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            type="button"
            onClick={() => setActiveCategory(category.title)}
            aria-pressed={activeCategory === category.title}
            className={`px-4 sm:px-5 py-3 rounded-xl border text-sm sm:text-base font-semibold transition-all duration-300 ${activeCategory === category.title
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20"
              : "bg-[#101729] border-white/10 text-gray-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10"
              }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Selected Category */}

      <div
        key={activeCategory}
        className="relative overflow-hidden bg-[#101729] border border-white/10 rounded-2xl p-6 sm:p-9 animate-[fadeInUp_0.4s_ease-out_both]"
      >
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">

          {/* Category Heading */}

          <div className="flex items-center justify-between gap-4 mb-9">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedCategory.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {selectedCategory.description}
              </p>
            </div>

            <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl">
              {selectedCategory.icon}
            </div>
          </div>

          {/* Skill Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {selectedCategory.skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group/skill bg-[#080b16] border border-white/10 rounded-xl p-5 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 animate-[fadeInUp_0.5s_ease-out_both]"
              >
                <div className="flex items-center gap-3 mb-5">

                  <div className="w-11 h-11 shrink-0 rounded-lg bg-white/5 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-200 font-semibold">
                      {skill.name}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">
                      {activeCategory === "Currently Learning"
                        ? "Learning progress"
                        : "Self-assessed proficiency"}
                    </p>
                  </div>

                  <span className="text-blue-400 font-bold text-sm tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}

                <div
                  className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs mt-7 text-center">
            Percentages represent approximate self-assessments, not formal test scores.
          </p>
        </div>
      </div>
    </div>
  );
}

// ================= ABOUT PAGE =================

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-24">

      {/* Background Effects */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-6">
            <User size={16} />
            ABOUT ME
            <Sparkles size={15} className="animate-pulse" />
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Get to Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Me
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            A passionate Computer Science student interested in software
            development, problem solving, and building useful applications.
          </p>
        </div>

        {/* ================= INTRODUCTION ================= */}

        <div className="relative group bg-[#101729] border border-white/10 rounded-2xl p-7 sm:p-10 mb-20 overflow-hidden hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]">

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

          <div className="relative">

            {/* Name */}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <User size={25} className="text-blue-400" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                Hello, I'm{" "}
                <span className="text-blue-400">Sampa Nayak</span>
              </h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              MERN Stack Developer
            </h3>

            {/* Status Badges */}

            <div className="flex flex-wrap gap-3 mb-7">
              <span className="px-4 py-2 rounded-full text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20">
                Final Year Student
              </span>

              <span className="px-4 py-2 rounded-full text-sm text-green-300 bg-green-500/10 border border-green-500/20">
                ● Open to Opportunities
              </span>

              <span className="px-4 py-2 rounded-full text-sm text-purple-300 bg-purple-500/10 border border-purple-500/20">
                Graduation: 2027
              </span>
            </div>

            {/* Introduction */}

            <p className="text-gray-400 leading-8 mb-5">
              I am a final-year Computer Science and Engineering student at
              Swami Vivekananda University. I enjoy developing modern,
              responsive web applications and exploring backend technologies.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              My technical interests include MERN stack development,
              Java programming, database management, and data structures
              and algorithms. I enjoy transforming ideas into practical
              applications through clean and efficient code.
            </p>

            <p className="text-gray-400 leading-8">
              I continuously work on projects and coding challenges to
              improve my technical knowledge and prepare for a career
              as a software developer.
            </p>

            {/* Project and Academic Stats */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-blue-400">4+</h3>
                <p className="text-gray-400 text-sm mt-1">Projects Built</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-purple-400">8.71</h3>
                <p className="text-gray-400 text-sm mt-1">CGPA / 10</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-pink-400">2027</h3>
                <p className="text-gray-400 text-sm mt-1">Graduation Year</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-2xl font-bold text-green-400">MERN</h3>
                <p className="text-gray-400 text-sm mt-1">Tech Stack</p>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <MapPin size={19} className="text-blue-400" />
              <span>West Bengal, India</span>
            </div>

            {/* Email */}

            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <Mail size={19} className="text-blue-400" />
              <a
                href="mailto:sampanayak987@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                sampanayak987@gmail.com
              </a>
            </div>

            {/* Phone */}

            <div className="flex items-center gap-3 text-gray-400 mb-7">
              <Phone size={19} className="text-blue-400" />
              <a
                href="tel:+918653032972"
                className="hover:text-blue-400 transition-colors"
              >
                +91 8653032972
              </a>
            </div>

            {/* Download Resume */}

            <a
              href="/Sampa-Nayak-Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <Download size={19} />
              Download Resume
            </a>
          </div>
        </div>

        {/* ================= INTERACTIVE TECHNICAL SKILLS ================= */}

        <SkillTabs />

        {/* ================= EDUCATION ================= */}

        <div className="mb-20 animate-[fadeInUp_0.8s_ease-out_both]">
          <SectionTitle
            label="MY JOURNEY"
            title={
              <>
                Educational <span className="text-blue-400">Background</span>
              </>
            }
            description="My academic journey and qualifications."
            icon={GraduationCap}
          />

          <div className="bg-[#101729] border border-white/10 rounded-2xl p-7 sm:p-9 hover:border-blue-500/40 transition-all duration-500">
            {education.map((item) => (
              <div key={item.degree} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <GraduationCap size={26} className="text-blue-400" />
                  </div>

                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-500 to-transparent mt-3" />
                </div>

                <div className="pb-8 flex-1 md:grid-cols-2 ">
                  <span className="text-xs text-blue-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-100 mt-2">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.institution}
                  </p>

                  <p className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                    <MapPin size={15} className="text-purple-400" />
                    {item.location}
                  </p>

                  {item.board && (
                    <p className="text-gray-400 text-sm mt-2">
                      Board: {item.board}
                    </p>
                  )}

                  <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 text-sm border border-green-500/20">
                    <Award size={16} />
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}

        <div className="mb-20">
          <SectionTitle
            label="PROFESSIONAL JOURNEY"
            title={
              <>
                My <span className="text-purple-400">Experience</span>
              </>
            }
            description="Internship experience and professional learning."
            icon={BriefcaseBusiness}
          />

          {experiences.map((item, index) => (
            <div
              key={item.role}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group bg-[#101729] border border-white/10 rounded-2xl p-7 sm:p-9 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BriefcaseBusiness size={28} className="text-purple-400" />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold text-purple-400">
                    INTERNSHIP
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold mt-2">
                    {item.role}
                  </h3>

                  <p className="text-purple-400 mt-2">
                    {item.organization}
                  </p>

                  <p className="text-gray-500 text-sm mt-3 flex items-center gap-2">
                    <Calendar size={15} />
                    Start Date: {item.startdate}
                  </p>

                  <p className="text-gray-400 leading-8 mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MEDISTOCK SHOWCASE ================= */}

        <div className="mb-20">
          <SectionTitle
            label="PROJECT SHOWCASE"
            title={
              <>
                MediStock <span className="text-blue-400">Dashboards</span>
              </>
            }
            description="A medical inventory management platform with role-based dashboards for Admin, Pharmacist, Staff and Supplier."
            icon={Code2}
          />

          <div className="grid md:grid-cols-2 gap-7">
            {mediStockDashboards.map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 120}ms` }}
                className="group bg-[#101729] border border-white/10 rounded-2xl p-5 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]"
              >
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 mb-5 leading-6">
                  {item.description}
                </p>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl border border-white/10 bg-[#080b16]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 text-blue-400 text-sm mt-4 hover:text-blue-300 transition"
                >
                  View Dashboard Screenshot
                  <ExternalLink size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INTERNSHIP DOCUMENTS ================= */}

        <div className="mb-20">
          <SectionTitle
            label="INTERNSHIP DOCUMENTS"
            title={
              <>
                My <span className="text-purple-400">Documents</span>
              </>
            }
            description="Internship offer letter and achievement documentation."
            icon={BookOpen}
          />

          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-7">
            {experienceImages.map((item, index) => (
              <div
                key={item.type}
                style={{ animationDelay: `${index * 150}ms` }}
                className="group bg-[#101729] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]"
              >
                <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">
                  {item.type}
                </span>

                <h3 className="font-semibold text-gray-200 text-lg mt-3 mb-5">
                  {item.subtitle}
                </h3>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl bg-white p-2"
                >
                  <img
                    src={item.image}
                    alt={item.subtitle}
                    className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-purple-400 text-sm mt-4 hover:text-purple-300"
                >
                  View Document
                  <ExternalLink size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ACHIEVEMENTS ================= */}

        <div className="mb-20">
          <SectionTitle
            label="MY ACHIEVEMENTS"
            title={
              <>
                Certifications & <span className="text-yellow-400">Awards</span>
              </>
            }
            description="Courses, certifications, and learning milestones."
            icon={Award}
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 120}ms` }}
                className="group bg-[#101729] border border-white/10 rounded-2xl p-6 hover:border-yellow-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Award size={23} className="text-yellow-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-100 text-lg">
                      {item.title}
                    </h3>

                    <p className="text-blue-400 text-sm mt-2">
                      {item.organization}
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.result}
                      {item.score && ` | ${item.score}`}
                    </p>

                    <p className="text-gray-500 text-xs mt-2">
                      {item.year}
                    </p>
                  </div>
                </div>

                {item.image && (
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 overflow-hidden rounded-xl bg-white p-3"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} certificate`}
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </a>
                )}

                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-yellow-400 text-sm mt-4 hover:text-yellow-300"
                >
                  View Full Certificate
                  <ExternalLink size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CODING PROFILES ================= */}

        <div className="mb-20">
          <SectionTitle
            label="CODING JOURNEY"
            title={
              <>
                Coding <span className="text-green-400">Profiles</span>
              </>
            }
            description="Connect with me and explore my coding practice and problem-solving journey."
            icon={Code2}
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            {codingProfiles.map((profile, index) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 150}ms` }}
                className={`group bg-[#101729] border border-white/10 rounded-2xl p-7 flex items-center gap-6 ${profile.color} hover:-translate-y-2 hover:shadow-xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]`}
              >
                <div className="w-16 h-16 shrink-0 rounded-xl bg-[#080b16] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={profile.image}
                    alt={`${profile.name} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    {profile.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {profile.description}
                  </p>

                  <span className={`${profile.textColor} text-sm mt-3 inline-flex items-center gap-2`}>
                    Visit Profile
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= CAREER GOAL ================= */}

        <div className="relative group overflow-hidden bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 border border-blue-500/20 rounded-3xl p-8 sm:p-12 text-center hover:border-blue-400/40 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]">

          <div className="absolute -top-24 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />

          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Target size={35} className="text-blue-400" />
            </div>

            <span className="text-blue-400 text-sm font-semibold tracking-wider">
              WHAT'S NEXT?
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-5">
              My Career <span className="text-blue-400">Goal</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto leading-8">
              My goal is to become a skilled software engineer, contribute to
              real-world projects, solve challenging problems, and continuously
              grow as a developer.
            </p>

            <a
              href="mailto:sampanayak987@gmail.com"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-semibold"
            >
              Let's Connect
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
