import { about } from "@/data/about";

export function AboutIntro() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pb-16 md:pb-20">
      <p className="max-w-3xl font-display text-2xl font-light leading-snug tracking-tight text-foreground md:text-4xl">
        {about.intro}{" "}
        <span className="italic text-mutedtext">{about.introAccent}</span>
      </p>

      <div className="mt-14 grid grid-cols-1 gap-px border border-divider bg-divider sm:grid-cols-3">
        {about.facts.map((fact) => (
          <div key={fact.label} className="bg-background p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-mutedtext">
              {fact.label}
            </p>
            <p className="mt-3 font-display text-lg font-medium tracking-tight md:text-xl">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
