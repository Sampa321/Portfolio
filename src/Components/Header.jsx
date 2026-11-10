
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Code2,
  ArrowUpRight,
} from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080b16]/90 backdrop-blur-xl border-b border-white/10">

      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span className="text-white text-xl font-bold">SN</span>
          </div>

          <div>
            <h1 className="text-white text-xl font-bold tracking-wide">
              Sampa<span className="text-blue-400">.</span>
            </h1>

            <p className="text-gray-500 text-xs tracking-widest">
              DEVELOPER PORTFOLIO
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  isActive(item.path)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {item.name}

              {isActive(item.path) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full animate-fade-in-up" />
              )}
            </Link>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="hidden lg:block">
          <a
            href="https://github.com/Sampa321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <Code2 size={17} />
            GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={27} className="animate-fade-in-up" />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden border-t border-white/10 bg-[#0c1020] px-5 overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[500px] py-5 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-2">
          {items.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${index * 60}ms` }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-1
                ${
                  isActive(item.path)
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
            >
              {item.name}

              {isActive(item.path) && (
                <Code2 size={17} />
              )}
            </Link>
          ))}

          <a
            href="https://github.com/Sampa321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Code2 size={18} />
            Visit GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

    </header>
  );
}
