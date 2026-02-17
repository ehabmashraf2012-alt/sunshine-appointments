const outlets = [
  { name: "The Guardian", font: "Georgia, serif", weight: "900", size: "text-2xl md:text-3xl" },
  { name: "itv", font: "Arial, sans-serif", weight: "700", size: "text-3xl md:text-4xl", italic: true },
  { name: "BBC Radio 4", font: "Arial, sans-serif", weight: "700", size: "text-lg md:text-xl" },
  { name: "Daily Mail", font: "Georgia, serif", weight: "700", size: "text-2xl md:text-3xl", italic: true },
  { name: "INDEPENDENT", font: "Georgia, serif", weight: "400", size: "text-base md:text-lg", tracking: "tracking-[0.25em]" },
  { name: "Greatest Hits Radio", font: "Arial, sans-serif", weight: "800", size: "text-base md:text-lg" },
];

const LogoItem = ({ outlet }: { outlet: typeof outlets[number] }) => (
  <span
    className={`${outlet.size} ${outlet.tracking ?? ""} shrink-0 text-primary-foreground/80 ${outlet.italic ? "italic" : ""}`}
    style={{ fontFamily: outlet.font, fontWeight: outlet.weight }}
  >
    {outlet.name}
  </span>
);

const FeaturedIn = () => {
  // Double the items for seamless loop
  const doubled = [...outlets, ...outlets];

  return (
    <section className="border-y border-primary/20 bg-primary py-6 overflow-hidden">
      <div className="flex items-center gap-8 md:gap-12">
        <span className="shrink-0 pl-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
          Featured In
        </span>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 md:gap-16">
            {doubled.map((o, i) => (
              <LogoItem key={`${o.name}-${i}`} outlet={o} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
