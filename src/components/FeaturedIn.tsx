const outlets = [
  "INDEPENDENT",
  "Greatest Hits Radio",
  "The Guardian",
  "itv",
  "BBC Radio 4",
  "Daily Mail",
];

const FeaturedIn = () => {
  return (
    <section className="border-y border-border bg-solar-green-light py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Featured In
          </span>
          {outlets.map((name) => (
            <span
              key={name}
              className="text-base font-bold tracking-tight text-foreground/70 md:text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
