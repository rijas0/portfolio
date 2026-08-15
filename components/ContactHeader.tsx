export function ContactHeader() {
  return (
    <header className="px-6 sm:px-10 lg:px-20 pt-16 md:pt-24 pb-14 md:pb-20">
      <div className="flex items-center gap-6">
        <span className="shrink-0 text-sm font-medium tracking-[0.25em] uppercase text-secondarytext">
          Contact
        </span>
      </div>

      <h1 className="mt-12 font-display font-heavy text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02] tracking-tight">
        Let&apos;s build
        <br />
        something{" "}
        <span className="italic font-light text-mutedtext">together.</span>
      </h1>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <p className="max-w-md text-base font-light leading-relaxed text-secondarytext">
          Whether it&apos;s a mobile app, a web platform, or a collaboration —
          I&apos;d love to hear about it.
        </p>
        </div>
        <span className="hidden sm:block w-px h-5 bg-divider" />
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
         <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm text-secondarytext">
            Available for new projects
          </span>
      </div>
    </header>
  );
}
