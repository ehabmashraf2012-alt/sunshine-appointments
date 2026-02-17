import { ClipboardCheck, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "Check Eligibility",
    description: "Answer a few quick questions to see if your home qualifies for solar savings.",
  },
  {
    icon: Home,
    step: "2",
    title: "Free Home Survey",
    description: "A solar expert visits your home to design your perfect system — completely free.",
  },
  {
    icon: Wrench,
    step: "3",
    title: "Professional Installation",
    description: "Our MCS-accredited team installs your system, typically in just one day.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Three simple steps to start saving on your energy bills
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-10 hidden h-0.5 w-[calc(100%-80px)] bg-border md:block" />
              )}
              <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-solar-green-light">
                <s.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
