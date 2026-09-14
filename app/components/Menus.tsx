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

function MenuItem(menu: menuProps) {
  return (
    <Link href={menu.href} className="flex items-center text-[#FFC31C] drop-shadow-[0_0_1px_#FFC31C] group p-2">
			<p className="text-[40px] font-caldareth">
				{menu.label.charAt(0)}
			</p>
			<p className="text-xl font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] group-hover:underline decoration-2 underline-offset-4 pb-2">
				{menu.label.slice(1)}
			</p>
    </Link>
  );
}

export default function Menus() {
  return (
    <motion.nav layout className="flex items-center gap-28">
      {menus.map((menu) => (
        <MenuItem key={menu.label} label={menu.label} href={menu.href} />
      ))}
    </motion.nav>
  );
}