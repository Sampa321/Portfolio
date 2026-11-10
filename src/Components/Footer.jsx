import React from "react";
import { Link } from "react-router-dom";
import {Mail, ArrowUp } from "lucide-react";
import { FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080b16] border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-white text-2xl font-bold">
              Sampa<span className="text-blue-400">.</span>
            </h2>
            <p className="text-sm mt-2">
              Final Year CSE Student | Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/project" className="hover:text-blue-400">Projects</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </div>

          <div className="flex gap-4">
            <a
                          href="https://github.com/Sampa321"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          title="GitHub"
                          className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                        >
                          <FaGithub size={28} />
                        </a>

            <a href="mailto:sampanayak987@gmail.com">
              <Mail size={21} className="hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Sampa Nayak. All rights reserved.</p>

          <button
  type="button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center gap-2 hover:text-blue-400"
>
  Back to top <ArrowUp size={15} />
</button>
        </div>

      </div>
    </footer>
  );
}