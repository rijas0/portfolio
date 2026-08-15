import WorkItem from "@/types/workitem";
import Link from "next/link";

export function SelectedWorkCard({ data }: { data: WorkItem }) {
  return (
    <Link
      href={`workdetails/${data.id}`}
      className="group flex items-center justify-between gap-6 py-12 md:py-16 transition-colors duration-300"
    >
      <div className="flex items-center gap-6 md:gap-16">
        <p className="font-display text-4xl md:text-6xl font-light text-mutedtext tabular-nums">
          {data.count}
        </p>
        <div className="min-w-0">
          <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
            {data.title}
          </h3>
          <p className="mt-2 text-sm md:text-base font-light text-secondarytext">
            {data.tagline}
          </p>
        </div>
      </div>
      <span className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-foreground transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
        <svg
          className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 group-hover:stroke-background"
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
    </Link>
  );
}
