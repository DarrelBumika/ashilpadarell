'use client'

import { motion } from "motion/react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ProjectsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl w-full text-[#FFC31C]"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]"
      >
        Projects
      </motion.h1>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
