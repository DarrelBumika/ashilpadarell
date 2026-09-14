const projects = [
  {
    title: "Multi-Agent Patient Support System",
    description: "A multi-agent AI system for post-visit patient support at community health centers. Uses LangChain and LLMs to provide follow-up care guidance, answer patient questions, and escalate urgent cases to healthcare staff.",
    tags: ["Python", "LangChain", "Multi-Agent", "LLM"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js, featuring a custom font, animated navigation, and a responsive design that adapts across mobile and desktop screens.",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion"],
  },
  {
    title: "Smart Campus Navigation",
    description: "A web-based campus navigation tool that helps students and visitors find rooms and facilities. Includes searchable directory and interactive floor plans.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Library Management System",
    description: "A full-stack library management application for tracking book loans, returns, and inventory. Features role-based access for librarians and members.",
    tags: ["Java", "SQL", "REST API"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl w-full z-10 text-[#FFC31C]">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]">Projects</h1>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-4 sm:p-5 border border-[#FFC31C]/30 rounded-sm bg-black/20 drop-shadow-[0_0_1px_#FFC31C] hover:border-[#FFC31C]/60 transition-colors"
          >
            <h2 className="text-lg sm:text-xl font-caldareth mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-normal font-sans [-webkit-text-stroke:1px_#FFC31C] text-justify leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] px-2.5 py-1 border border-[#FFC31C]/40 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
