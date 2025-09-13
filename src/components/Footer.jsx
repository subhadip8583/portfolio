import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative py-8 mt-10 bg-gradient-to-br from-blue-900 via-indigo-950 to-black text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} Subhadip Adhikary. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a
            href="https://linkedin.com/in/subhadipadhikary8583"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            target="_blank"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/subhadip8583"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            target="_blank"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>

      {/* Background decorative shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>
      </div>
    </motion.footer>
  );
}
