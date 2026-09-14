'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import BackgroundEmptyImage from "@/app/assets/image/background-empty.jpg"

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-black/30 z-10"></div>
          <Image 
            src={BackgroundEmptyImage} 
            alt="background" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'right top' }}
            unoptimized
            className="w-full h-full"
          />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="absolute top-6 left-6 z-20"
      >
        <Link href="/" className="flex items-center gap-2 text-[#FFC31C] drop-shadow-[0_0_1px_#FFC31C] hover:opacity-80 transition-opacity">
          <span className="text-2xl font-caldareth">&larr;</span>
          <span className="text-sm font-medium [-webkit-text-stroke:1px_#FFC31C]">Back</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="z-10 w-full flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
