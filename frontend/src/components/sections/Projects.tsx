import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Here's a selection of projects I've worked on. Each one presented
            unique challenges and opportunities for growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl group animate-on-scroll ${
                index % 3 === 0
                  ? ""
                  : index % 3 === 1
                  ? "animation-delay-200"
                  : "animation-delay-400"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-semibold">
                        {project.title}
                      </h4>
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 transition-colors">
                  {project.description}
                </p>

                <button
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id
                    )
                  }
                  className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none"
                >
                  {activeProject === project.id ? "Show less" : "Read more"}
                </button>

                {activeProject === project.id && (
                  <div className="mt-4 animate-fade-in">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                      {project.longDescription}
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4 space-y-1 transition-colors">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <div className="flex space-x-4 mt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
