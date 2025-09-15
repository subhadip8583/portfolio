import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-black shadow-md transition-colors duration-300">
        <div className="container mx-auto flex items-center justify-between px-6 sm:px-10 md:px-6 py-4">
          {/* Logo always left */}
          <a
            href="#hero"
            className="font-bold text-xl sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Subhadip Adhikary
          </a>

          {/* Desktop Menu */}
          <ul className="md:ml-3 hidden md:flex space-x-8 md:text-sm lg:text-base xl:text-lg 2xl:text-xl md:space-x-5 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right buttons + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="/Subhadip_Btech_Compsc.pdf"
              download
              className="ml-3 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Resume
            </a>

            <button
              className="md:hidden p-2 rounded hover:bg-white/20 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6 text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black shadow-lg absolute w-full left-0 top-full flex flex-col items-center py-6 space-y-4 backdrop-blur-sm"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-cyan-400 text-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
