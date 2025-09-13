import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  const skills = {
    Languages: [
      { name: "Java", rating: 4 },
      { name: "JavaScript", rating: 4 },
      { name: "SQL", rating: 3 },
    ],
    Subjects: [
      { name: "Software Engineering", rating: 4 },
      { name: "RDBMS", rating: 4 },
      { name: "Object-Oriented Programming", rating: 4 },
      { name: "DSA", rating: 3 },
    ],
    "Libraries & Frameworks": [
      { name: "Node.js", rating: 4 },
      { name: "React.js", rating: 4 },
    ],
    Tools: [
      { name: "VS Code", rating: 5 },
      { name: "GitHub", rating: 4 },
    ],
  };

  return (
  <section
  id="skills"
  className="relative py-20 bg-gradient-to-b from-emerald-950 via-teal-900 to-black text-white"
>



      {/* Title */}
     <SectionTitle
  title={
    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      Skills & Proficiency
    </span>
  }
  subtitle={
    <span className="text-gray-300">
      My efficiency across technologies and subjects
    </span>
  }
/>


      {/* Skill Categories */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-16">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-800 to-purple-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-5 border-b border-purple-500 pb-2">
              {category}
            </h3>
            <ul className="space-y-4">
              {items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between text-gray-200"
                >
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={20}
                        className={`transition-colors duration-300 ${
                          starIdx < skill.rating
                            ? "text-yellow-400 fill-yellow-400 hover:scale-125"
                            : "text-gray-600 hover:text-yellow-400"
                        }`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
}
