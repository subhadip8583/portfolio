import profile from "../assets/profile.jpg";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_40%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        
        {/* Profile Image with gradient ring */}
        <div className="relative inline-block rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[3px]">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-gray-900 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent ">
            About Me
          </h2>
         <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
  I am <span className="text-cyan-300 font-semibold">Subhadip Adhikary</span>, a 
  B.Tech graduate in <span className="text-purple-300 font-medium">Computer Science and Engineering</span>. 
  Currently interning at <span className="text-purple-300 font-medium">Weavers Web Solutions</span>, 
  I specialize in <span className="text-cyan-300 font-medium">MERN stack development</span>, creating 
  responsive and user-friendly applications. With hands-on experience in 
  <span className="text-pink-300 font-medium">full-stack projects</span> like 
  e-commerce, music streaming, and productivity tools, I bring both 
  <span className="text-pink-300 font-medium">problem-solving skills</span> and a 
  passion for clean, scalable design. I am actively seeking opportunities as a 
  <span className="text-cyan-300 font-semibold">Software Developer, Full-Stack Developer, 
  Frontend Engineer, or Backend Engineer</span>, where I can contribute and grow.
</p>

        </div>
      </div>
    </section>
  );
}
