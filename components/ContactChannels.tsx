import { contact } from "@/data/contact";
import type { ReactNode } from "react";

function Arrow() {
  return (
    <svg
      className="w-4 h-4"
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
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3h4l1.5 5L8 9.5a12 12 0 0 0 6.5 6.5l1.5-2.5 5 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05a4.17 4.17 0 0 1 3.76-2.07c4.02 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H9z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const channels: {
  label: string;
  value: string;
  hint: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Phone",
    value: contact.phoneDisplay,
    hint: "Call me",
    href: `tel:${contact.phoneRaw}`,
    icon: <PhoneIcon />,
  },
  {
    label: "WhatsApp",
    value: contact.phoneDisplay,
    hint: "Chat on WhatsApp",
    href: contact.links.whatsapp,
    icon: <WhatsappIcon />,
  },
  {
    label: "LinkedIn",
    value: "Rijas Muhammed",
    hint: "Connect on LinkedIn",
    href: contact.links.linkedin,
    icon: <LinkedinIcon />,
  },
  {
    label: "Location",
    value: "Kannur, Kerala, India",
    hint: "Open in maps",
    href: contact.mapsUrl,
    icon: <PinIcon />,
  },
];

export function ContactChannels() {
  return (
    <section className="px-6 sm:px-10 lg:px-20">
      <div className="border border-divider">
        <a
          href={`mailto:${contact.email}`}
          className="group block bg-foreground text-background"
        >
          <div className="flex flex-col gap-8 px-8 py-14 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-background/50">
                Prefer email?
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight">
                Say hello
              </h2>
              <p className="mt-3 text-sm font-light text-background/50">
                {contact.responseTime}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-display text-lg font-light tracking-tight text-background/90 md:text-2xl">
                {contact.email}
              </span>
              <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-background transition-colors duration-300 group-hover:bg-background">
                <span className="text-background transition-colors duration-300 group-hover:text-foreground">
                  <Arrow />
                </span>
              </span>
            </div>
          </div>
        </a>

        <div className="grid grid-cols-1 border-t border-divider bg-divider sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex min-h-[230px] flex-col justify-between bg-background p-8 transition-colors duration-300 hover:bg-foreground"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-divider text-foreground transition-colors duration-300 group-hover:border-background/30 group-hover:text-background">
                  {channel.icon}
                </span>
                <span className="text-mutedtext transition-all duration-300 group-hover:translate-x-1 group-hover:text-background">
                  <Arrow />
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-mutedtext transition-colors duration-300 group-hover:text-background/50">
                  {channel.label}
                </p>
                <p className="mt-2 text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-background">
                  {channel.value}
                </p>
                <p className="mt-1 text-sm font-light text-secondarytext transition-colors duration-300 group-hover:text-background/50">
                  {channel.hint}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
