const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LangChain", "OpenAI API", "Multi-Agent Systems", "RAG", "Prompt Engineering", "Hugging Face"],
  },
  {
    title: "Web Development",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "Supabase", "REST API"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "PostgreSQL", "Linux", "Figma", "VS Code"],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-3xl w-full z-10 text-[#FFC31C]">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]">Skills</h1>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="drop-shadow-[0_0_1px_#FFC31C]">
            <h2 className="text-lg sm:text-xl font-caldareth mb-3 sm:mb-4">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm sm:text-base font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] px-3 py-1.5 border border-[#FFC31C]/40 rounded-sm bg-black/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
