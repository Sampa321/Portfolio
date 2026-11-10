
import React from "react";
import {
  Trophy,
  Code2,
  Target,
  Award,
  ExternalLink,
  TrendingUp,
  Medal,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    title: "GeeksforGeeks",
    count: "800+",
    description: "Problems solved through coding practice and algorithm challenges.",
    category: "Problem Solving",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    link: "https://www.geeksforgeeks.org/user/sampanas3m4u/",
  },
  {
    title: "LeetCode",
    count: "250+",
    description: "Problems solved to strengthen data structures and algorithms.",
    category: "DSA Practice",
    icon: Target,
    color: "from-orange-500 to-yellow-500",
    link: "https://leetcode.com/u/Sampa_Nayak1/",
  },
  {
    title: "NPTEL Programming in Java",
    count: "88%",
    description: "Achieved Elite + Silver certification in Programming in Java.",
    category: "Academic Achievement",
    icon: Medal,
    color: "from-blue-500 to-cyan-500",
    link: "/certificates",
  },
  {
    title: "NPTEL Design And Analysis Of Algorithms",
    count: "55%",
    description: "Achieved certification in Design And Analysis of Algorithms.",
    category: "Academic Achievement",
    icon: Medal,
    color: "from-blue-500 to-cyan-500",
    link: "/certificates",
  },
  
  {
    title: "Academic Performance",
    count: "8.71/10",
    description: "Maintaining a strong academic record in B.Tech Computer Science and Engineering.",
    category: "Education",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    link: "/about",
  },
];

export default function Achievements() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-20">

      {/* Background Effects */}
      <div className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-[-100px] w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-5">
            <Trophy size={16} className="animate-float" />
            MY ACHIEVEMENTS
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Achievements
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Every problem solved and every milestone achieved is a step
            forward in my software development journey.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "800+", label: "GFG Problems Solved", icon: Code2 },
            { number: "250+", label: "LeetCode Problems", icon: Target },
            { number: "8.71/10", label: "Academic CGPA", icon: Award },
            { number: "88%", label: "NPTEL Java Score", icon: Medal },
          ].map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                style={{ animationDelay: `${index * 150}ms` }}
                className="bg-[#101729] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              >
                <Icon
                  size={28}
                  className="text-blue-400 mx-auto mb-4"
                />

                <h2 className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </h2>

                <p className="text-gray-400 text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievement Cards */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-blue-400" size={25} />
            <h2 className="text-2xl sm:text-3xl font-bold">
              Milestones & Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{ animationDelay: `${index * 180}ms` }}
                  className="group relative bg-[#101729] border border-white/10 rounded-2xl p-7 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)] transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                >
                  <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition duration-500`} />

                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon size={27} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <p className="text-blue-400 text-xs uppercase tracking-wider mb-2">
                        {item.category}
                      </p>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-7">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between gap-3 mt-5">
                        <span className="text-2xl font-bold text-white">
                          {item.count}
                        </span>

                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-cyan-300 transition-colors"
                        >
                          View Details
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivation Section */}
        <div className="bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-blue-500/20 rounded-2xl p-8 sm:p-12 text-center animate-fade-in-up">
          <TrendingUp size={36} className="text-blue-400 mx-auto mb-5 animate-float" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Consistency Builds Success
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            I believe that continuous practice, curiosity, and dedication
            are the keys to becoming a better software developer.
            I keep learning, building, and improving every day.
          </p>
        </div>

      </div>
    </section>
  );
}
