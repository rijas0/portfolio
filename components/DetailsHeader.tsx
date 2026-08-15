import WorkItem from "@/types/workitem";
import Link from "next/link";
import { Divider } from "./Divider";
import Image from "next/image";

const metaFields: { key: keyof WorkItem; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "duration", label: "Duration" },
  { key: "category", label: "Category" },
  { key: "platform", label: "Platform" },
];

export default function DetailsHeader({ data }: { data: WorkItem }) {
  return (
    <div className="px-6 sm:px-10 lg:px-20 pt-10 pb-16">
      <Link
        href="/#work"
        className="group inline-flex items-center gap-2 text-sm text-secondarytext transition-colors duration-200 hover:text-foreground"
      >
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </svg>
        Back to work
      </Link>

      <div className="flex justify-between items-center">
        <div>
          <p className="mt-12 font-display text-3xl md:text-5xl font-light italic text-mutedtext tabular-nums">
        {data?.count}
      </p>
      <h1 className="mt-4 font-display text-6xl md:text-8xl font-medium tracking-tight leading-none">
        {data?.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-secondarytext">
        {data?.tagline}
      </p>
        </div>
        <div className="w-40 rounded-4xl bg-white h-auto object-cover p-5">
          <Image src={data?.logo} alt="Logo" width={400} height={400}/>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metaFields.map((field) => (
          <div key={field.key}>
            <p className="text-xs uppercase tracking-[0.2em] text-mutedtext font-light">
              {field.label}
            </p>
            <p className="mt-2 text-sm font-medium">
              {data ? String(data[field.key]) : "-"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Divider />
      </div>
    </div>
  );
}
