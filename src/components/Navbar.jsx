import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = () => {
    const sections = ["#home", "#about", "#resume", "#project", "#contact"];
    let currentSection = "#home";

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) { 
          currentSection = section;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='bg-black text-white fixed top-0 left-0 w-full z-50 px-8 md:px-16 lg:px-24'>
      <div className='container mx-auto py-2 flex justify-between items-center'>
        
        <div 
          className='text-2xl font-bold cursor-pointer'
          onClick={() => (window.location.hash = '#home')}
        >
          Robert
        </div>

        <div className='flex items-center space-x-6'>
          {["#home", "#about", "#resume", "#project"].map((section) => (
            <a
              key={section}
              href={section}
              className={`relative hover:text-gray-400 ${activeSection === section ? "text-white" : "text-gray-400"}`}
              style={{ position: "relative" }}
            >
              {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
              {activeSection === section && (
                <span
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
                  style={{
                    transform: "scaleX(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
              )}
            </a>
          ))}

          <a
            href="#contact"
            className="connect-button"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
