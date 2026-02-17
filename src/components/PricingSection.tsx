import { CreditCard, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  {
    icon: CreditCard,
    title: "Cash Payment",
    description: (
      <>A deposit followed by a completion payment. Perfect for those who want <strong className="text-foreground">complete control</strong> and the long-term benefits <strong className="text-foreground">from day one</strong>.</>
    ),
  },
  {
    icon: CalendarClock,
    title: "Finance Plans",
    description: (
      <>Fixed monthly payments with <strong className="text-foreground">no hidden fees and full indemnity guarantee</strong>. Choose a term length that suits you.</>
    ),
  },
];

const PricingSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Worried About the Costs?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Choose from flexible and transparent pricing. No more renting your energy at unpredictable, extortionate costs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {options.map((opt, i) => {
            const isSelected = selected === i;
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(i)}
                className={`cursor-pointer rounded-2xl p-7 shadow-sm transition-all duration-200 ${
                  isSelected
                    ? "border-2 border-primary bg-solar-green-light"
                    : "border border-border bg-background hover:border-primary/40"
                }`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  isSelected ? "bg-primary" : "bg-solar-green-light"
                }`}>
                  <Icon className={`h-6 w-6 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{opt.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {opt.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-base font-medium text-muted-foreground">
          Let's make 2026 the year you stop renting your energy and{" "}
          <span className="font-bold text-primary">start owning it with solar!</span>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
