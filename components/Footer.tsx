import Link from "next/link";
import { contact } from "@/data/contact";

export function Footer() {
  return (
    <footer id="contact" className="w-full py-12 px-4">
      <div className="flex flex-col items-center justify-between gap-4 mx-10 md:flex-row md:items-center">
        <p className="text-sm text-gray-500">{contact.location}</p>
        <Link
          href={`mailto:${contact.email}`}
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-foreground"
        >
          {contact.email}
        </Link>
        <a
          href={`tel:${contact.phoneRaw}`}
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-foreground"
        >
          {contact.phoneDisplay}
        </a>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p>/ /</p>
      </div>
    </footer>
  );
}
