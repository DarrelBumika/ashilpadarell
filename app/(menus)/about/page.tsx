'use client'

import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

export default function AboutPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl w-full px-4 text-[#FFC31C]"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]"
      >
        About
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="flex items-center drop-shadow-[0_0_1px_#FFC31C] mt-4"
      >
        <p className="text-base sm:text-lg lg:text-xl font-medium pb-1 [-webkit-text-stroke:1px_#FFC31C] text-justify">
          <span className="font-caldareth text-2xl sm:text-3xl lg:text-[40px]">A</span> Information Technology undergraduate with a strong passion for Artificial Intelligence and software development. Currently completing a thesis on a multi-agent AI system for post-visit patient support at community health centers (Puskesmas).
        </p>
      </motion.div>
    </motion.div>
  );
}
