import { Sun, Battery, Zap, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import installerBattery from "@/assets/installer-battery.webp";

const steps = [
  {
    icon: Sun,
    step: "1",
    title: "Expert Installation",
    description: "Your high-performance system includes a bespoke design tailored to maximise your roof space and capture as much sunlight as possible.",
  },
  {
    icon: Battery,
    step: "2",
    title: "Store Your Energy",
    description: "A smart battery storage system captures excess energy and powers your home at night or during peak times when electricity costs more.",
  },
  {
    icon: Zap,
    step: "3",
    title: "Power Your Home",
    description: "Use your own electricity any time of day or night. Say goodbye to paying extortionate costs to your current energy supplier.",
  },
  {
    icon: PartyPopper,
    step: "4",
    title: "Enjoy Energy Freedom",
    description: "You've taken control of your energy future. Your panels are backed by a lifetime warranty and an expert team on hand if you need support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Cut Your Bills From Day One
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            The solution to lower bills is easier than you think. Your solar and battery storage system will help you store energy you generate and take control of your power supply.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-solar-green-light">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
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
