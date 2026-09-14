export default function AboutPage () {
    return (
        <div className="max-w-xl w-full px-4 z-10 text-[#FFC31C]">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]">About</h1>
            <div className="flex items-center drop-shadow-[0_0_1px_#FFC31C] mt-4">
                <p className="text-base sm:text-lg lg:text-xl font-medium pb-1 [-webkit-text-stroke:1px_#FFC31C] text-justify">
                    <span className="font-caldareth text-2xl sm:text-3xl lg:text-[40px]">A</span> Information Technology undergraduate with a strong passion for Artificial Intelligence and software development. Currently completing a thesis on a multi-agent AI system for post-visit patient support at community health centers (Puskesmas).</p>
            </div>
        </div>
    )
}