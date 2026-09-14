const contacts = [
  { label: "Email", value: "ashilpa.darrel@email.com", href: "mailto:ashilpa.darrel@email.com" },
  { label: "GitHub", value: "github.com/ashilpadarrel", href: "https://github.com/ashilpadarrel" },
  { label: "LinkedIn", value: "linkedin.com/in/ashilpadarrel", href: "https://linkedin.com/in/ashilpadarrel" },
  { label: "Instagram", value: "@ashilpadarrel", href: "https://instagram.com/ashilpadarrel" },
];

export default function ContactPage() {
  return (
    <div className="max-w-xl w-full z-10 text-[#FFC31C]">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-caldareth drop-shadow-[0_0_1px_#FFC31C]">Contact</h1>
      <p className="mt-4 text-base sm:text-lg font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] drop-shadow-[0_0_1px_#FFC31C] text-justify">
        Feel free to reach out through any of the channels below. I am open to collaboration, internships, and new opportunities.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:gap-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 sm:p-4 border border-[#FFC31C]/30 rounded-sm bg-black/20 drop-shadow-[0_0_1px_#FFC31C] hover:border-[#FFC31C]/60 transition-colors"
          >
            <span className="text-base sm:text-lg font-caldareth min-w-[100px]">
              {contact.label}
            </span>
            <span className="text-sm sm:text-base font-medium font-sans [-webkit-text-stroke:1px_#FFC31C] opacity-90 break-all">
              {contact.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
