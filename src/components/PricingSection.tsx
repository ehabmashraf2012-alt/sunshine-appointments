import { CreditCard, CalendarClock, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Worried About the Costs?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Choose from flexible and transparent pricing. No more renting your energy at unpredictable, extortionate costs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-green-light">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Cash Payment</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A deposit followed by a completion payment. Perfect for those who want <strong className="text-foreground">complete control</strong> and the long-term benefits <strong className="text-foreground">from day one</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border-2 border-primary bg-solar-green-light p-7 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <CalendarClock className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Finance Plans</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Fixed monthly payments with <strong className="text-foreground">no hidden fees and double indemnity</strong>. Choose a term length that suits you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-green-light">
              <KeyRound className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Leasing</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Low initial outlay and immediate access to solar energy upon installation. <strong className="text-foreground">Save on bills from day one.</strong>
            </p>
          </motion.div>
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
