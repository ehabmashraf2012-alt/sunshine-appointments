import { Shield, Award, Star, Handshake } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const usps = [
  {
    icon: Shield,
    title: "Year One Performance Guarantee",
    description: "If your system doesn't perform as quoted in year one, we'll refund the difference. No questions asked.",
  },
  {
    icon: Award,
    title: "MCS & RECC Accredited",
    description: "Full accreditation means you're protected by industry-leading consumer codes and eligible for all government incentives.",
  },
  {
    icon: Star,
    title: "As Seen with Kevin McCloud",
    description: "Proud partners of Grand Designs — trusted by the UK's most respected voice in sustainable building.",
  },
  {
    icon: Handshake,
    title: "6,000+ Five-Star Reviews",
    description: "Our customers rate us 4.8/5 on Trustpilot, making us the UK's highest-rated solar installer.",
  },
];

const WhyChooseUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-solar-green-light px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <button className="group mx-auto flex w-full max-w-lg items-center justify-center gap-3 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Why 50,000+ Homeowners Choose Us
              </h2>
              <ChevronDown
                className={`h-6 w-6 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid gap-6 sm:grid-cols-2"
            >
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-solar-green-light">
                    <usp.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {usp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {usp.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default WhyChooseUs;
