import Link from "next/link";
import { about } from "@/data/about";

export function AboutCta() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pt-4 pb-20 md:pb-24">
      <Link
        href="/contact"
        className="group block bg-foreground text-background"
      >
        <div className="flex flex-col gap-8 px-8 py-14 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50">
              Next step
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-sm font-light text-background/50">
              {about.cta}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-5">
            <span className="text-base font-light">
              Let&apos;s work together
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-background transition-colors duration-300 group-hover:bg-background">
              <svg
                className="h-5 w-5 text-background transition-colors duration-300 group-hover:text-foreground"
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
            </span>
          </span>
        </div>
      </Link>
    </section>
  );
}
