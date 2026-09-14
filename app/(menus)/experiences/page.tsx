const experiences = [
  {
    role: "AI Research Intern",
    organization: "Puskesmas Community Health Center",
    period: "2025 — Present",
    description: "Developing a multi-agent AI system for post-visit patient support as part of undergraduate thesis research. Designing conversational agents that provide follow-up care guidance and answer patient questions.",
  },
  {
    role: "Software Development Intern",
    organization: "Tech Startup",
    period: "2024 — 2025",
    description: "Built and maintained web applications using React and Next.js. Collaborated with a small team to deliver features, fix bugs, and improve performance across multiple client projects.",
  },
  {
    role: "IT Laboratory Assistant",
    organization: "University IT Department",
    period: "2023 — 2024",
    description: "Assisted students with programming fundamentals, data structures, and database concepts. Conducted lab sessions and graded assignments for introductory computer science courses.",
  },
  {
    role: "Freelance Web Developer",
    organization: "Self-employed",
    period: "2022 — 2023",
    description: "Created websites for small businesses and student organizations. Handled full-stack development from design to deployment, including landing pages and content management systems.",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="max-w-2xl w-full z-10 text-[#FFC31C]">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]">Experiences</h1>
      <div className="mt-8 sm:mt-10 flex flex-col gap-6 sm:gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l border-[#FFC31C]/30 drop-shadow-[0_0_1px_#FFC31C]">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FFC31C]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-lg sm:text-xl font-caldareth">
                {exp.role}
              </h2>
              <span className="text-sm font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] opacity-80">
                {exp.period}
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] opacity-90 mb-2">
              {exp.organization}
            </p>
            <p className="text-sm sm:text-base font-normal font-sans [-webkit-text-stroke:1px_#FFC31C] text-justify leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
