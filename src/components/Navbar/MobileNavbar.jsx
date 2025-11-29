import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function MobileNavbar() {
  return (
    <div className="lg:hidden px-1 pt-15 pb-5">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3 text-slate-200 tracking-tight">
          Abdelrahman Sayed
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-slate-200">
          Front End Engineer
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xs">
          Make web go brrrrr.
        </p>
      </div>

      <div className="flex items-center gap-5 text-slate-400">
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