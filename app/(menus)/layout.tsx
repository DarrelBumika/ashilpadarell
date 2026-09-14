import Image from "next/image";

import BackgroundEmptyImage from "@/app/assets/image/background-empty.jpg"

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-4">
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

      {children}
    </div>
  );
}