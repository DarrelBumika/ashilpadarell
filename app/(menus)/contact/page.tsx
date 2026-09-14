'use client'

import { motion } from "motion/react";

const contacts = [
  { label: "Email", value: "ashilpa.darrel@email.com", href: "mailto:ashilpa.darrel@email.com" },
  { label: "GitHub", value: "github.com/ashilpadarrel", href: "https://github.com/ashilpadarrel" },
  { label: "LinkedIn", value: "linkedin.com/in/ashilpadarrel", href: "https://linkedin.com/in/ashilpadarrel" },
  { label: "Instagram", value: "@ashilpadarrel", href: "https://instagram.com/ashilpadarrel" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ContactPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl w-full text-[#FFC31C]"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]"
      >
        Contact
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-4 text-base sm:text-lg font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] drop-shadow-[0_0_1px_#FFC31C] text-justify"
      >
        Feel free to reach out through any of the channels below. I am open to collaboration, internships, and new opportunities.
      </motion.p>
      <div className="mt-8 flex flex-col gap-3 sm:gap-4">
        {contacts.map((contact) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            variants={itemVariants}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 sm:p-4 border border-[#FFC31C]/30 rounded-sm bg-black/20 drop-shadow-[0_0_1px_#FFC31C] hover:border-[#FFC31C]/60 transition-colors"
          >
            <span className="text-base sm:text-lg font-caldareth min-w-[100px]">
              {contact.label}
            </span>
            <span className="text-sm sm:text-base font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] opacity-90 break-all">
              {contact.value}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
