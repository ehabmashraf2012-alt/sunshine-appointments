import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="bg-solar-warm px-4 py-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            We're Rated 'Excellent'
          </h2>
          <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i <= 4 ? "fill-solar-gold text-solar-gold" : "fill-solar-gold/50 text-solar-gold/50"}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.6 Rating</span>
            <span className="text-sm text-muted-foreground">· by 5,700+ verified customers on Trustpilot</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <div className="mb-2 flex">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-solar-gold text-solar-gold" />
                ))}
              </div>
              <h4 className="font-display text-sm font-bold text-foreground">"{t.title}"</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-4">{t.text}</p>
              <p className="mt-3 text-xs font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
