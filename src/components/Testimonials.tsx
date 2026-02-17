import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bristol",
    saving: "£1,100/year",
    text: "From the initial survey to installation, everything was professional and seamless. Our electricity bill has dropped by over £90 a month — I wish we'd done it sooner.",
    rating: 5,
  },
  {
    name: "James & Claire T.",
    location: "Manchester",
    saving: "£950/year",
    text: "The team were brilliant. They explained everything clearly, installed in one day, and the system has been performing above expectations. Highly recommend.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Kent",
    saving: "£1,250/year",
    text: "Best home investment we've ever made. The battery storage means we barely use grid electricity anymore. Project Solar made the whole process effortless.",
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
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Real savings from real UK homeowners
          </p>
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
