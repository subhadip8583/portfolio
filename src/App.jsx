import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";

import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className=" px-1 ">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <About />

        <Contact />
        <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "80px",   // adjust this depending on your navbar height
        }}
      />
      </main>
    </div>
  );
}
