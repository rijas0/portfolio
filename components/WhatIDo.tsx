import { about } from "@/data/about";

export function WhatIDo() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pb-16 md:pb-20">
      <div className="flex items-center gap-6 pb-10">
        <span className="shrink-0 text-sm font-medium tracking-[0.25em] uppercase text-secondarytext">
          What I do
        </span>
        <div className="flex-1 h-px bg-divider" />
        <span className="shrink-0 font-display text-sm italic text-mutedtext">
          01
        </span>
      </div>

      <div className="border-t border-divider">
        {about.whatIDo.map((item, index) => (
          <div
            key={item.title}
            className="group flex flex-col gap-2 border-b border-divider py-8 md:grid md:grid-cols-[80px_280px_1fr] md:items-baseline md:gap-10 md:py-10"
          >
            <p className="font-display text-xl font-light italic text-mutedtext tabular-nums md:text-3xl">
              0{index + 1}
            </p>
            <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xl text-base font-light leading-relaxed text-secondarytext md:mt-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
