import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Weather Forecast App",
      description:
        "A clean and responsive weather application that provides real-time weather data and 7-day forecasts. Features location search, weather alerts, and interactive maps.",
      demoUrl: "https://abdelrahmans00.github.io/WeatherAPI/",
      technologies: ["React", "TypeScript", "API Integration", "Tailwind"],
    },
    {
      title: "Task Management Dashboard",
      description:
        "Developed a Kanban-style task management web application. The project allows users to create, update, and organize tasks into multiple columns.",
      demoUrl: "https://abdelrahmans00.github.io/TodoReact/",
      technologies: ["React", "TypeScript", "Tailwind", "DnD Kit"],
    },
    {
      title: "BlogIt",
      description:
        "A full-featured blog application, allowing users to explore, read, and manage articles with ease.",
      demoUrl: "https://abdelrahmans.pythonanywhere.com/",
      technologies: ["Django", "Python", "authentication", "Bootstrap"],
    },
  ];

  return (
    <section id="projects" className="mb-32 scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >

            <div className="z-10 sm:col-span-6 sm:order-1">
              <h3 className="font-medium leading-snug text-slate-200">
                <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline"
                  >
                    <span className="inline-block">
                      {project.title}
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">
                {project.description}
              </p>

              <div className="mt-2 flex gap-4 text-xs text-slate-400">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                  > 
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    Source Code
                  </a>
                )}
              </div>

              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technologies.map((tech, techIdx) => (
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