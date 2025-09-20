import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack MERN E-commerce app with product management, cart, and Stripe payments.jdjdjd jjsjsjjsjsjsjsjsjsj",
      image: project1,
      images: [project1, project1, project1], // 👈 replicated
      tech: ["React", "Node.js", "Express", "MongoDB"],
      demo: "https://fleximart.netlify.app",
      github: "https://github.com/subhadip8583/E-Commerce-Frontend",
    },
    {
      title: "Music Application",
      description:
        "Streaming platform using YouTube Music API with authentication and Material-UI.",
      image: project2,
      images: [project2, project2, project2], // 👈 replicated
      tech: ["React", "Node.js", "Express"],
      demo: "https://musicapp-ankydv.vercel.app",
      github: "https://github.com/ankydv/Euphonic",
    },
    {
      title: "To-Do List App",
      description:
        "JWT-authenticated note-taking application with a responsive interface.",
      image: project3,
      images: [project3, project3, project3], // 👈 replicated
      tech: ["React", "Node.js", "Express"],
      demo: "https://inotebook-frontend-gray.vercel.app/login",
      github: "https://github.com/subhadip8583/inotebook_frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden 
                 bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-950"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-transparent to-pink-500/20 blur-3xl" />

      <SectionTitle
        title={
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            Projects
          </span>
        }
        subtitle={
          <span className="text-gray-300">
            A selection of my best work showcasing MERN stack skills
          </span>
        }
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
