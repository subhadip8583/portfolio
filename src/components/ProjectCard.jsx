export default function ProjectCard({ title, description, image, tech, demo, github }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                 border border-gray-100 dark:border-gray-700 
                 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full 
                         bg-gradient-to-r from-indigo-500 to-purple-500 
                         text-white shadow-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg shadow 
                       bg-gradient-to-r from-pink-500 to-indigo-600 
                       text-white font-medium hover:opacity-90 transition"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg font-medium
                       border-2 border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-transparent bg-clip-text hover:scale-105 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
