import { ClipboardCheck, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import installerBattery from "@/assets/installer-battery.webp";

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
    title: "Quick Installation",
    description: "Professional installation in as little as 3 weeks. Our accredited team handles everything.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Three simple steps to start saving on your energy bills
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-solar-green-light">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={installerBattery}
              alt="Professional installer fitting battery storage system"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
