import { Home, Sun, Battery, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface EligibilitySavingsProps {
  onOpenForm: () => void;
}

const EligibilitySavings = ({ onOpenForm }: EligibilitySavingsProps) => {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Could You Save £800–£1,200 Per Year?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Most UK homeowners are eligible. Check in under 2 minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Home, label: "Own your home", detail: "Freehold or mortgage" },
            { icon: Sun, label: "Suitable roof", detail: "South, east or west facing" },
            { icon: Battery, label: "Use 200+ kWh/month", detail: "Average UK household" },
            { icon: PiggyBank, label: "Want to save", detail: "On electricity bills" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-border bg-solar-green-light p-6 text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="font-display text-base font-bold text-foreground">{item.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={onOpenForm}
            size="lg"
            className="h-14 rounded-xl px-10 text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Check Your Eligibility
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySavings;
