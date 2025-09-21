import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.png";
import project13 from "../assets/project13.png";
import project14 from "../assets/project14.png";
import project15 from "../assets/project15.png";
import project21 from "../assets/project21.png";
import project22 from "../assets/project22.png";
import project31 from "../assets/project31.png";

export default function Projects() {
 const projects = [
  {
    title: "E-Commerce Web App",
    techStack: "HTML, CSS, JavaScript, Node.js, React.js, Express.js, MongoDB",
    description: [
      "Developed a full-stack E-Commerce web application using the MERN stack",
      "Responsive React-based frontend with grid layout",
      "Product detail routing via React Router",
      "Secure REST API integration using Express.js and Node.js",
      "MongoDB for data management",
      "Cart functionality and Stripe integration for payment processing",
    ],
    image: project1,
    images: [project1, project11, project12, project13, project14,project15],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://fleximart.netlify.app",
    github: "https://github.com/subhadip8583/E-Commerce-Frontend",
  },
  {
    title: "Music Application",
    techStack: "HTML, CSS, JavaScript, Node.js, Express.js, React.js, YouTube Music API",
    description: [
      "Developed a MERN-based music and video streaming platform",
      "Implemented secure user authentication and media management",
      "Integrated YouTube Music API for real-time music and video content",
      "Built a responsive and visually appealing interface using Material-UI",
      "Enhanced user experience with dynamic playback and smooth UI interactions",
    ],
    image: project2,
    images: [project2, project21, project22],
    tech: ["React", "Node.js", "Express"],
    demo: "https://musicapp-ankydv.vercel.app",
    github: "https://github.com/ankydv/Euphonic",
  },
  {
    title: "To-Do List App",
    techStack: "HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB",
    description: [
      "JWT-authenticated note-taking and task management application",
      "Implemented secure login and signup system with authentication",
      "Responsive user interface built with React",
      "Ability to create, update, and delete notes in real-time",
      "Backend powered by Express.js and MongoDB for efficient data handling",
    ],
    image: project3,
    images: [project3, project31],
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
