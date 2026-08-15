import WorkItem from "@/types/workitem";
import Image from "next/image";
import Link from "next/link";

export default function LiveLink({ data }: { data: WorkItem }) {
  const links = [
    { label: "Website", href: data.websiteLink, icon: "/globe.svg" },
    { label: "Android", href: data.androidLink, icon: "/internet.svg" },
    { label: "iOS", href: data.iosLink, icon: "/window.svg" },
  ];

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
        Live Links
      </h2>
      <div className="mt-8 border-t border-divider">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 border-b border-divider"
          >
            <div className="flex items-center gap-4">
              <Image
                src={link.icon}
                alt={link.label}
                width={20}
                height={20}
                className="opacity-60 transition-opacity duration-200 group-hover:opacity-100"
              />
              <span className="text-base font-light text-secondarytext transition-colors duration-200 group-hover:text-foreground">
                {link.label}
              </span>
            </div>
            <span className="text-sm font-medium text-mutedtext transition-colors duration-200 group-hover:text-foreground">
              {link.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
