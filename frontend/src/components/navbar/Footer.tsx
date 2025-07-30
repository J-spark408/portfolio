type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-blue-400">J</span>spark
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Building beautiful, functional software solutions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="text-sm uppercase font-semibold text-gray-300 mb-3">
                Quick Links
              </h4>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jspark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
