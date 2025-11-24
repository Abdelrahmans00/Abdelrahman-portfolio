export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Vite",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "API Integration",
        "Redux",
        "React Query",
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        "Node.js",
        "django",
        "Ruby on Rails",
        "npm",
        "SQL",
      ],
    },
    {
      category: "Design & Other",
      skills: [
        "Responsive Design",
        "Web Accessibility",
        "Performance Optimization",
        "UI/UX Design",
        "Agile/Scrum",
        "Git",
        "Jira",
      ],
    },
  ];

  return (
    <section id="skills" className="mb-32 scroll-mt-16 pb-16 border-b border-slate-700/50">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Skills
        </h2>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}