import { useRef } from "react";
import useSectionObserver from "../hooks/useSectionObserver";

export default function About() {
  const ref = useRef(null);
  useSectionObserver("about", ref);

  return (
    <section 
      id="about"
      ref={ref}
      className="mb-32 scroll-mt-16 pt-20 pb-16 border-b border-slate-700/50"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          I'm a Computer Science student at 
          <span className="text-slate-200 font-medium"> Cairo University</span>, and a front-end developer skilled in building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.
        </p>

        <p>
          I've experience in modern UI/UX design, API integration, and performance optimization, and I’m constantly exploring new tools and technologies to expand my expertise.
        </p>

        <p>
          I also have strengthened both my frontend and backend skills, especially during my internship at <br></br>
          <span className="text-slate-200 font-medium"> Procore Technologies</span>, where I worked on real-world features, improved my code quality, and collaborated in a professional engineering environment.
        </p>

        

        <p>
          I'm eager to keep learning, growing, and adapting quickly, always excited to take on challenges that push my technical and creative limits.
        </p>
      </div>
    </section>
  );
}