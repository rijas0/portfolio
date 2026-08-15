import { contact } from "@/data/contact";

const socials = [
  { label: "LinkedIn", href: contact.links.linkedin },
  { label: "GitHub", href: contact.links.github },
  { label: "Instagram", href: contact.links.instagram },
];

export function SocialsStrip() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-10 md:py-14">
      <div className="flex flex-col gap-6 border-t border-divider pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-secondarytext">
          Elsewhere
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base font-light text-secondarytext transition-colors duration-200 hover:text-foreground"
            >
              {social.label}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
