import { Github, Linkedin, Mail } from "lucide-react";
import selfPortfolio from "../images/self_portfolio.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={selfPortfolio}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              John Park
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6 animate-fade-in animation-delay-200">
              Junior Software Developer
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in animation-delay-600">
              <a
                href="https://github.com/j-spark408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sungwook-park-b97a25116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:parksungwook93@gmail.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                aria-label="Email contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
