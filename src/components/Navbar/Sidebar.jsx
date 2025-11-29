import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed left-10 top-10 h-full w-120 bg-[#0a192f] flex-col justify-between p-12">
      
      <div>
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-3 text-slate-200 tracking-tight w-110">
            Abdelrahman Sayed
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-slate-200">
            Front End Engineer
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Make web go brrrrr.
          </p>
        </div>

        <nav className="flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-4 text-left transition-all"
            >
              <span
                className={`h-px bg-slate-600 transition-all ${
                  activeSection === section.id
                    ? "w-16 bg-slate-200"
                    : "w-8 group-hover:w-16 group-hover:bg-slate-200"
                }`}
              />
              
              <span
                className={`text-xs font-bold tracking-widest transition-colors ${
                  activeSection === section.id
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200"
                }`}
              >
                {section.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-5 text-slate-400 pb-20">
        <a
          href="https://github.com/Abdelrahmans00"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-200 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelrahman-sayed-9312142a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-200 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:abdelrahmansayed5002@gmail.com"
          className="hover:text-slate-200 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
        <a
          href="/Abdelrahman-portfolio/Abdelrahman-Sayed-CV.pdf"
          download="Abdelrahman_Sayed_CV.pdf"
          className="hover:text-slate-200 transition-colors"
          aria-label="Download CV"
        >
          <Download size={24} />
        </a>
      </div>
    </div>
  );
}