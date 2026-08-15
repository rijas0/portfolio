export function HeroComponent() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 w-full flex justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center text-center pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="text-sm uppercase tracking-[0.3em] text-secondarytext mb-8">
          Hello, I&apos;m
        </p>
        <h1 className="font-display text-[clamp(4.5rem,16vw,11rem)] leading-none tracking-tight font-heavy">
          Rijas<span className="text-mutedtext">.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg font-light leading-relaxed text-secondarytext">
          I build digital products with clean design and smooth experiences —
          from mobile apps to full-stack platforms.
        </p>
        <div className="mt-14 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm text-secondarytext">
            Available for new projects
          </span>
        </div>
      </div>
    </section>
  );
}
