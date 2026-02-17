import { CreditCard, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-green-light">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Cash Payment</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A deposit followed by a completion payment. Perfect for those who want complete control and the long-term benefits from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border-2 border-primary bg-solar-green-light p-8 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <CalendarClock className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Finance Plans</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Fixed monthly payments with no hidden fees and full indemnity guarantee. Choose a term length that suits you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
