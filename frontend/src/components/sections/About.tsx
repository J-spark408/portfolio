import { skillCategories, education, experience } from "../../data/aboutInfo";
import {
  GraduationCap,
  Briefcase,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="py-20 dark:bg-gray-900 transition-colors bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            A highly motivated recent grduate excited to begin my career in the
            world of software development. I'm a passionate software developer
            with a strong desire to build applications and create engaging,
            visually appealing designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {edu.duration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="animate-on-scroll animation-delay-200">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    {exp.position}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {exp.duration}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors">
          Skills & Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center mb-4">
                {category.icon}
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                  {category.name}
                </h4>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1s ease-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
