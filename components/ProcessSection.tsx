import { about } from "@/data/about";

export function ProcessSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pb-16 md:pb-20">
      <div className="flex items-center gap-6 pb-10">
        <span className="shrink-0 text-sm font-medium tracking-[0.25em] uppercase text-secondarytext">
          How I work
        </span>
        <div className="flex-1 h-px bg-divider" />
        <span className="shrink-0 font-display text-sm italic text-mutedtext">
          02
        </span>
      </div>

      <div className="grid grid-cols-1 gap-px border border-divider bg-divider sm:grid-cols-2 lg:grid-cols-4">
        {about.process.map((step, index) => (
          <div
            key={step.title}
            className="group bg-background p-8 transition-colors duration-300"
          >
            <p className="font-display text-3xl font-light italic text-mutedtext transition-colors duration-300 group-hover:text-foreground md:text-4xl">
              0{index + 1}
            </p>
            <h3 className="mt-10 font-display text-2xl font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-secondarytext">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
