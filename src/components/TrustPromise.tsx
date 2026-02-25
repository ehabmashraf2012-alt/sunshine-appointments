import { ShieldCheck, Headset, FileCheck, HardHat, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const painPoints = [
  {
    icon: HardHat,
    problem: "Installers who vanish",
    solution: "50,000+ certified installations across the UK — we're not going anywhere.",
  },
  {
    icon: FileCheck,
    problem: "Warranties that don't hold up",
    solution: "Insurance-backed guarantees that protect you, not just promises on paper.",
  },
  {
    icon: ShieldCheck,
    problem: "No accountability after payment",
    solution: "Dedicated UK support team for the lifetime of your system.",
  },
  {
    icon: Headset,
    problem: "Sales reps who disappear",
    solution: "End-to-end project management from survey to switch-on and beyond.",
  },
];

const TrustPromise = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-background px-6 py-10 md:px-4 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <button className="group mx-auto flex w-full max-w-lg flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Your Home. Your Investment.
              </p>
              <div className="mt-2 flex items-center gap-3">
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  The savings aren't the scary part
                </h2>
                <ChevronDown
                  className={`h-6 w-6 text-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </div>
            </button>
          </CollapsibleTrigger>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Trusting the wrong team on your roof is.
          </p>

          <CollapsibleContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {painPoints.map((item, i) => (
                  <motion.div
                    key={item.problem}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-2 rounded-lg bg-destructive/10 p-3">
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <p className="text-sm font-medium leading-relaxed text-destructive">
                        Others: {item.problem}
                      </p>
                    </div>
                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-solar-green-light p-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary p-6 text-center md:p-8">
                <p className="text-lg font-bold text-primary-foreground md:text-xl">
                  50,000+ systems installed. Zero reasons to worry.
                </p>
                <p className="mx-auto mt-2 max-w-lg text-sm text-primary-foreground/80">
                  Every issue above? Already solved. So all you need to think about is what to do with the savings.
                </p>
              </div>
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default TrustPromise;
