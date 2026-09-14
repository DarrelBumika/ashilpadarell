'use client'

import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="text-5xl sm:text-7xl lg:text-8xl font-caldareth text-[#FFC31C]"
      >
        Not Found!
      </motion.h1>
    </div>
  );
}
