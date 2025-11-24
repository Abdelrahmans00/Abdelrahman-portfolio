import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "AUG 2025 — NOV 2025",
      title: "Software Engineer Intern",
      company: "Procore Technologies",
      companyUrl: "https://www.procore.com/",
      description:
        "Collaborated with the team on multiple tickets as a Full-Stack Web Developer, contributing to both front-end and back-end tickets",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Ruby",
        "Ruby on Rails",
        "Git",
        "Agile",
        "Jira",
      ],
    },
  ];

  return (
    <section id="experience" className="mb-32 scroll-mt-16 pb-16 border-b border-slate-700/50">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {exp.period}
            </div>

            <div className="z-10 sm:col-span-5">
              <h3 className="font-medium leading-snug text-slate-200">
                <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {exp.title} ·{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300"
                    >
                      <span className="inline-block">
                        {exp.company}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </a>
                  </span>
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">
                {exp.description}
              </p>

              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                {exp.technologies.map((tech, techIdx) => (
                  <li key={techIdx}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
}