import { useEffect } from "react";
import Header from "./components/navbar/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/navbar/Footer";
import { observer } from "./utils/animation";
import ScrollUpBtn from "./utils/ScrollUpBtn";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Jspark Portfolio";

    // Initialize scroll animations
    observer();

    // Add animation classes
    const addAnimationClasses = () => {
      const style = document.createElement("style");
      style.textContent = `
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }
      `;
      document.head.appendChild(style);
    };

    addAnimationClasses();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUpBtn />
    </div>
  );
}

export default App;
