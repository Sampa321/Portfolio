
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Certificates from "./Pages/Certificates.jsx";
import Project from "./Pages/Project.jsx";
import Achievements from "./Pages/Achievements.jsx";
import Experience from "./Pages/Experience.jsx";
import Skills from "./Pages/Skills.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-white">
              <h1 className="text-3xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}


