import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David S.",
    location: "Homeowner",
    saving: "£1,100/year",
    text: "The process was seamless. Our energy bills dropped immediately and the installation was professional.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "Bristol",
    saving: "£950/year",
    text: "From the initial survey to installation, everything was brilliant. The team explained everything clearly and installed in one day.",
    rating: 5,
  },
  {
    name: "Al L.",
    location: "Verified Customer",
    saving: "£1,250/year",
    text: "High quality install. The team arrived on time and installed promptly and professionally. The site team were clean and tidy and demonstrated the app and system to me in full.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-solar-warm px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i <= 4 ? "fill-solar-gold text-solar-gold" : "fill-solar-gold/50 text-solar-gold/50"}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.6 Rating</span>
            <span className="text-sm text-muted-foreground">· Rated 'Excellent' by 5,700+ customers on Trustpilot</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-solar-green-light" />
              <div className="mb-3 flex">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-solar-gold text-solar-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="rounded-lg bg-solar-green-light px-3 py-1">
                  <p className="text-xs font-semibold text-primary">Saving {t.saving}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
