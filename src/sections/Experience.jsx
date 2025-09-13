import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  const experiences = [
    {
      role: "Intern – Weavers Web Solutions",
      date: "Mar 2025 – Present",
      points: [
        "Full-stack development using MERN stack",
        "Built REST APIs with Node.js and Express.js",
        "Frontend development with React.js",
      ],
    },
  ];

  return (
   <section
  id="experience"
  className="relative py-20 bg-gradient-to-b from-indigo-950 via-purple-900 to-black"
>

      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),transparent_40%)] pointer-events-none" />

      <SectionTitle
  title={
    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      Experience
    </span>
  }
  subtitle={<span className="text-gray-400">Professional journey & internships</span>}
/>


      <div className="relative max-w-4xl mx-auto px-6 mt-12">
        {/* Timeline vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative ml-16 bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-indigo-900/50 transition-all border border-gray-700"
            >
              {/* Timeline marker */}
              <div className="absolute -left-12 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-gray-950 shadow-md" />

              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="inline-block mt-2 px-4 py-1 text-sm font-medium text-indigo-300 bg-indigo-900/50 rounded-full shadow-sm">
                {exp.date}
              </span>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
