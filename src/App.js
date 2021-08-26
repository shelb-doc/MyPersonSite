import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Art from "./components/Designs";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Art />
      <Blog />
      <Skills />
      <Contact />
      <Footer />

    </main>
  );
}