export function AboutHeader() {
  return (
    <header className="px-6 sm:px-10 lg:px-20 pt-16 md:pt-24 pb-14 md:pb-20">
      <div className="flex items-center gap-6">
        <span className="shrink-0 text-sm font-medium tracking-[0.25em] uppercase text-secondarytext">
          About
        </span>
        <div className="flex-1 h-px bg-divider" />
        <span className="shrink-0 font-display text-sm italic text-mutedtext">
          who I am
        </span>
      </div>

      <h1 className="mt-12 font-display font-heavy text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02] tracking-tight">
        Crafting digital
        <br />
        products with{" "}
        <span className="italic font-light text-mutedtext">intent.</span>
      </h1>
    </header>
  );
}
