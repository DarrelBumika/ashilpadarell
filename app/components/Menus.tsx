'use client'

import { motion } from "motion/react";
import Link from "next/link";

interface menuProps {
    label: string,
    href: string
}

const menus : menuProps[] = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Experiences",
      href: "/experiences",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function MenuItem(menu: menuProps) {
  return (
    <motion.div variants={itemVariants}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href={menu.href} className="flex items-center text-[#FFC31C] drop-shadow-[0_0_1px_#FFC31C] group p-1.5 sm:p-2">
          <p className="text-2xl sm:text-3xl lg:text-[40px] font-caldareth">
            {menu.label.charAt(0)}
          </p>
          <p className="text-sm sm:text-lg lg:text-xl font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] group-hover:underline decoration-2 underline-offset-4 pb-1 sm:pb-2">
            {menu.label.slice(1)}
          </p>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Menus() {
  return (
    <motion.nav
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 lg:gap-28"
    >
      {menus.map((menu) => (
        <MenuItem key={menu.label} label={menu.label} href={menu.href} />
      ))}
    </motion.nav>
  );
}
