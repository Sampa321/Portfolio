 
import {
  Award,
  ExternalLink,
  GraduationCap,
  Medal,
  BookOpen,
  Sparkles,
  Code2,
} from "lucide-react";

const certificates = [
  {
    title: "Programming in Java",
    organization: "NPTEL ONLINE CERTIFICATION",
    description:
      "Successfully completed Programming in Java with Elite + Silver certification.",
    result: "Elite + Silver",
    score: "88%",
    category: "Programming",
    icon: Medal,
    color: "from-amber-500 to-orange-500",
    year: "Jul-Oct 2025",
    image: "/certifications/JavaNPTEL.png",
  },
  {
    title: "Design and Analysis of Algorithms",
    organization: "NPTEL ONLINE CERTIFICATION",
    description:
      "Successfully completed Design and Analysis of Algorithms.",
    result: "Course Achievement",
    score: "55%",
    category: "Programming",
    icon: Medal,
    color: "from-amber-500 to-orange-500",
    year: "Jan-Mar 2025",
    image: "/certifications/AlgorithmsNPTEL.png",
  },
  {
    title: "Java Foundation Certification",
    organization: "Infosys Springboard",
    description:
      "Successfully completed Java Foundation certification through Infosys Springboard.",
    result: "Certificate of Achievement",
    score: "",
    category: "Professional Development",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    year: "April 11, 2026",
    image: "/certifications/JavaInfosys.png",
  },
  {
    title: "React Training",
    organization: "Ardent Computech Pvt. Ltd.",
    description: "Successfully completed React training.",
    result: "Certificate of Completion",
    score: "",
    category: "Training",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    year: "April 06 – July 31, 2024",
    image: "/certifications/ReactArdent.png",
  },
];

export default function Certificates() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-20">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[40%] right-[-100px] w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-5 hover:bg-blue-500/20 transition-all duration-300">
            <Award size={16} className="animate-float" />
            MY ACHIEVEMENTS
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Achievements
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Explore my certifications, training achievements, and
            professional learning experiences.
          </p>

          {/* CERTIFICATE STATISTICS */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 max-w-5xl mx-auto">

  {[
    {
      label: "Total Certificates",
      count: "4+",
      icon: Award,
      color: "text-blue-400",
    },
    {
      label: "NPTEL",
      count: "2",
      icon: GraduationCap,
      color: "text-purple-400",
    },
    {
      label: "Infosys",
      count: "1",
      icon: BookOpen,
      color: "text-cyan-400",
    },
    {
      label: "Other Certificates",
      count: "1",
      icon: Sparkles,
      color: "text-pink-400",
    },
    {
      label: "Learning Experiences",
      count: "3",
      icon: Code2,
      color: "text-green-400",
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.label}
        className="bg-[#101729] border border-white/10 rounded-2xl p-5 text-center hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
      >
        <Icon size={25} className={`${item.color} mx-auto mb-3`} />

        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          {item.count}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          {item.label}
        </p>
      </div>
    );
  })}
</div>
        </div>

        {/* Certificate Cards */}
        <div className="flex flex-col gap-8">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <div
                key={certificate.title}
                style={{ animationDelay: `${index * 180}ms` }}
                className="group relative bg-[#101729] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl
                hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(37,99,235,0.15)]
                transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              >
                {/* Card Gradient Top Border */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                  {/* LEFT SIDE - Certificate Description */}
                  <div className="order-2 md:order-1">

                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      <div
                        className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${certificate.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon size={25} className="text-white" />
                      </div>

                      <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-full">
                        {certificate.year}
                      </span>
                    </div>

                    <p className="text-blue-400 text-sm mb-2 tracking-wide">
                      {certificate.category}
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {certificate.title}
                    </h2>

                    <h3 className="text-gray-300 font-medium mb-4">
                      {certificate.organization}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      {certificate.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 items-center">
                      <span className="text-sm text-gray-300">
                        Result:{" "}
                        <span className="text-emerald-400 font-semibold">
                          {certificate.result}
                        </span>
                      </span>

                      {certificate.score && (
                        <span className="text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                          Score: {certificate.score}
                        </span>
                      )}
                    </div>

                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 text-sm font-medium mt-6 group/link"
                    >
                      View Full Certificate
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                      />
                    </a>
                  </div>

                  {/* RIGHT SIDE - Certificate Image */}
                  <div className="order-1 md:order-2">
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View full ${certificate.title} certificate`}
                      className="block overflow-hidden rounded-xl"
                    >
                      <div className="bg-white rounded-xl p-3 h-[260px] sm:h-[320px] flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                        <img
                          src={certificate.image}
                          alt={`${certificate.title} certificate`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Section */}
        <div
          style={{ animationDelay: "800ms" }}
          className="relative mt-16 overflow-hidden bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-blue-500/20 rounded-2xl p-8 sm:p-12 text-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] hover:border-blue-500/40 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative">
            <BookOpen
              size={35}
              className="text-blue-400 mx-auto mb-5 animate-float"
            />

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Always Learning, Always Growing
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-8">
              I believe continuous learning and practical experience are
              essential for becoming a better software developer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
