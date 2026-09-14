import Image from "next/image";

import BackgoundImage from "@/app/assets/image/background.jpg"
import Link from "next/link";
import Menus from "./components/Menus";

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
          <h1 className="font-caldareth text-5xl sm:text-7xl lg:text-8xl font-bold text-[#FFC31C] drop-shadow-[0_0_1px_#FFC31C] text-center">Ashilpa Darrel Bumika</h1>
          <p className="text-base sm:text-xl font-medium text-[#FFC31C] [-webkit-text-stroke:1px_#FFC31C] drop-shadow-[0_0_1px_#FFC31C]">a portfolio</p>
        </div>
        <div className="flex items-center p-2 sm:p-2.5">
          <Menus />
        </div>
      </div>
    </div>
  );
}
