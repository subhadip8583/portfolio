import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  const education = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Gargi Memorial Institute of Technology",
      duration: "2020 – 2024",
      result: "CGPA: 8.89",
    },
    {
      title: "Higher Secondary (Science)",
      institution: "Dhamsa P C Sen Institution",
      duration: "2020",
      result: "88.4%",
    },
    {
      title: "Secondary",
      institution: "Radhaballavpur High School",
      duration: "2018",
      result: "86.7%",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white"
    >
      {/* Title */}
     <SectionTitle
  title={
    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      Education
    </span>
  }
  subtitle={
    <span className="text-gray-300">
      My academic background & achievements
    </span>
  }
/>


      {/* Timeline / Cards */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="border-l-4 border-pink-400 pl-6 space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-purple-800/70 to-indigo-900/60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-10 top-6 flex items-center justify-center w-8 h-8 bg-pink-400 rounded-full shadow-md">
                <GraduationCap size={18} className="text-black" />
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-pink-300">
                {edu.title}
              </h3>
              <p className="text-gray-200">{edu.institution}</p>
              <p className="text-sm text-gray-400">
                {edu.duration} |{" "}
                <span className="font-medium">{edu.result}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl animate-bounce"></div>
      </div>
    </section>
  );
}
