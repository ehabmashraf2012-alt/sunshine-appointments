import { Home, Sun, Battery, PiggyBank, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import kevinHomeowner from "@/assets/kevin-homeowner.webp";

interface EligibilitySavingsProps {
  onOpenForm: () => void;
}

const EligibilitySavings = ({ onOpenForm }: EligibilitySavingsProps) => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-solar-green-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldAlert className="h-3.5 w-3.5" />
            Exclusive Opportunity
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Could You Save Up to 70%?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            This offer is exclusively for homeowners who meet all criteria below. Check if you qualify before slots fill up.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={kevinHomeowner}
              alt="Kevin McCloud consulting with homeowners about solar installation"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Criteria */}
          <div>
            <div className="space-y-4">
              {[
                { icon: Home, label: "You own your home", detail: "This offer is only available to homeowners" },
                { icon: Sun, label: "You're staying 3+ years", detail: "Planning to stay and enjoy the long-term savings" },
                { icon: Battery, label: "Your bills exceed £150/month", detail: "Higher bills mean bigger savings potential" },
                { icon: PiggyBank, label: "You want to cut energy costs", detail: "Join thousands already saving up to 70%" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-solar-green-light p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={onOpenForm}
              size="lg"
              className="mt-8 h-14 w-full rounded-xl text-lg font-semibold shadow-lg shadow-primary/25"
            >
              Check Your Eligibility
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Due to high demand, we can only hold your slot briefly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySavings;
