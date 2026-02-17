import { Shield, Award, Star, Handshake } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import kevinHeadshot from "@/assets/kevin-headshot.jpg";

const usps = [
  {
    icon: Shield,
    title: "Certified Installations",
    description: "Systems expertly fitted to the very highest standards by accredited professionals.",
  },
  {
    icon: Award,
    title: "Ongoing Support",
    description: "A UK-based team available to support you whenever you need, for the lifetime of your system.",
  },
  {
    icon: Star,
    title: "We're Rated 'Excellent'",
    description: "Our partners are rated 'Excellent' on Trustpilot by 5,700+ verified customers.",
  },
  {
    icon: Handshake,
    title: "Flexible Payments",
    description: "Making solar accessible with several payment options — cash, finance, or leasing.",
  },
];

const WhyChooseUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-solar-green-light px-4 py-10 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <button className="group mx-auto flex w-full max-w-lg items-center justify-center gap-3 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Don't Settle for Less
              </h2>
              <ChevronDown
                className={`h-6 w-6 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </CollapsibleTrigger>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
            With an expert team, you get more than just solar panels. You'll receive specialist advice, high-quality products, and ongoing support.
          </p>
          <CollapsibleContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={kevinHeadshot}
                  alt="Kevin McCloud with solar battery storage system"
                  className="h-56 w-full object-cover object-[center_40%] md:h-72"
                />
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
              </div>
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default WhyChooseUs;
