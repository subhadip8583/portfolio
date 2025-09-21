import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 
                 bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 
                 flex items-center justify-center rounded-full cursor-pointer 
                 hover:bg-black/80 transition"
      onClick={onClick}
    >
      ›
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 
                 bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 
                 flex items-center justify-center rounded-full cursor-pointer 
                 hover:bg-black/80 transition"
      onClick={onClick}
    >
      ‹
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  techStack,
  image,
  tech = [],
  demo,
  github,
  images = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      {/* Project Card */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                   border border-gray-100 dark:border-gray-700 
                   hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>

          {/* View More button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-3 text-sm font-medium text-indigo-600 hover:underline self-start"
          >
            View More →
          </button>

          {/* Tech stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs sm:text-sm rounded-full 
                           bg-gradient-to-r from-indigo-500 to-purple-500 
                           text-white shadow-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Demo / GitHub Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 sm:px-4 py-2 rounded-lg shadow 
                         bg-gradient-to-r from-pink-500 to-indigo-600 
                         text-white text-sm sm:text-base font-medium hover:opacity-90 transition"
            >
              Live Demo
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 sm:px-4 py-2 rounded-lg font-medium
                         border-2 border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-transparent bg-clip-text text-sm sm:text-base hover:scale-105 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl 
                       w-full max-w-6xl relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden
                       mb-1"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute lg:top-4 lg:right-4 lg:bottom-auto lg:left-auto 
             bottom-4 right-4
             w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
             rounded-full
             bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
             text-white font-bold
             shadow-lg shadow-cyan-500/40
             hover:scale-110 hover:rotate-90 hover:shadow-teal-500/50
             transition-all duration-300 ease-in-out
             z-50"
            >
              ✖
            </button>

            {/* Image Slider */}
            <div className="w-full p-3 sm:p-4 flex items-center justify-center order-1 lg:order-none">
              <Slider {...settings} className="w-full">
                {images.map((img, idx) => (
                  <div key={idx} className="flex justify-center items-center">
                    <img
                      src={img}
                      alt={`slide-${idx}`}
                      className="rounded-xl w-full h-auto max-h-[250px] sm:max-h-[400px] lg:max-h-[500px] object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Details */}
            <div className="w-full p-4 sm:p-6 flex flex-col justify-center order-2 lg:order-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>

              <div>
                <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200">
                  Tech Stack: <span className="font-normal">{techStack}</span>
                </p>
                <ul className="mt-2 sm:mt-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed list-disc pl-6">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Tech stack in modal */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full 
                               bg-gradient-to-r from-indigo-500 to-purple-500 
                               text-white shadow-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Demo / GitHub Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow 
                             bg-gradient-to-r from-pink-500 to-indigo-600 
                             text-white font-medium text-sm sm:text-base hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-medium
                             border-2 border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 
                             text-transparent bg-clip-text hover:scale-105 transition text-sm sm:text-base"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
