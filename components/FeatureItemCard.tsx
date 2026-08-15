export default function FeatureItemCard({ title }: { title: string }) {
  return (
    <div className="flex items-start gap-4">
      <svg
        className="w-4 h-4 mt-1 shrink-0 text-secondarytext"
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
      <p className="text-base font-light leading-relaxed text-secondarytext">
        {title}
      </p>
    </div>
  );
}
