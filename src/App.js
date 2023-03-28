import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FrontEnd from "./components/Frontend";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <FrontEnd Challenges />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}