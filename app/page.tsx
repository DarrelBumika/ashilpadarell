'use client'

import Image from "next/image";
import { motion } from "motion/react";

import BackgoundImage from "@/app/assets/image/background.jpg"
import Menus from "./components/Menus";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-black/30 z-10"></div>
        <Image 
          src={BackgoundImage} 
          alt="background" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'right top' }}
          unoptimized
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-8 z-10 px-4">
        <div className="flex flex-col items-center gap-2 sm:gap-2.5">
          <motion.h1
            custom={0}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="font-caldareth text-5xl sm:text-7xl lg:text-8xl font-bold text-[#FFC31C] drop-shadow-[0_0_1px_#FFC31C] text-center"
          >
            Ashilpa Darrel Bumika
          </motion.h1>
          <motion.p
            custom={1}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-xl font-medium text-[#FFC31C] [-webkit-text-stroke:1px_#FFC31C] drop-shadow-[0_0_1px_#FFC31C]"
          >
            a portfolio
          </motion.p>
        </div>
        <motion.div
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center p-2 sm:p-2.5"
        >
          <Menus />
        </motion.div>
      </div>
    </div>
  );
}
