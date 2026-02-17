import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Mr Jack Bourne",
    title: "Super smooth",
    text: "Very straight forward. Good customer service. From first conversation to installation it has been super smooth. Very happy!",
    rating: 5,
  },
  {
    name: "Mrs Davies",
    title: "Nothing was too much trouble",
    text: "I was delighted with my installation. The installers were fast, clean and very professional. Nothing was too much trouble and everything was finished and working by the end of the day. We are now drawing 50% less electricity from the grid.",
    rating: 5,
  },
  {
    name: "Mr Elwyn Moses",
    title: "All round great service",
    text: "Great service all round, from the advisor coming to the house. The scaffolders were excellent and very quick. The installers were very efficient and went the extra mile.",
    rating: 5,
  },
  {
    name: "L Bushell",
    title: "High Quality Install",
    text: "Outstanding service from start to finish. The install team arrived on time and installed promptly and professionally. The site team were clean and tidy and demonstrated the app and system to me in full.",
    rating: 5,
  },
  {
    name: "Damien",
    title: "Excellent from start to finish",
    text: "The service was excellent from start to finish, the sales rep knew his stuff and explained everything in detail. The installation was hassle free and very quick and after service has been first class.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-solar-green-light px-4 py-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            We're Rated 'Excellent'
          </h2>
          <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-solar-gold text-solar-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9 Rating</span>
            <span className="text-sm text-muted-foreground">· by 5,700+ verified customers on</span>
            {/* Trustpilot text logo */}
            <span className="text-sm font-bold text-foreground">★ Trustpilot</span>
          </div>
        </div>

        {/* Swipeable carousel */}
        <div className="relative mt-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative min-w-[260px] flex-[0_0_80%] rounded-2xl border border-border bg-background p-5 shadow-sm sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="mb-2 flex">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-solar-gold text-solar-gold" />
                    ))}
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground">
                    "{t.title}"
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-4">
                    {t.text}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-foreground">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-md transition-opacity disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-md transition-opacity disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
