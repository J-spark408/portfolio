import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full border-2 border-solid bg-white hover:bg-gray-600/30 text-black-400 dark:p-3 dark:border-2 dark:border-black dark:bg-blue-600/20 dark:hover:bg-blue-400/30 dark:text-blue-400"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default ScrollUpBtn;
