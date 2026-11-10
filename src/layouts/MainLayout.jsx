
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080b16]">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
