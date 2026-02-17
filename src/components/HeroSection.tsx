import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-20 pt-28 md:pt-36 md:pb-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-solar-green-light opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-solar-green-light opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-solar-green-light px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-3.5 w-3.5 fill-solar-gold text-solar-gold" />
            UK's #1 Rated Solar Installer
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Premium Solar &<br />
            Battery Storage,{" "}
            <span className="text-primary">By Invitation</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Join 50,000+ UK homeowners already saving with the country's
            most trusted solar installer. Check if your home qualifies in under
            2 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          {/* Value Props */}
          <div className="flex flex-col gap-3 text-left sm:flex-row sm:gap-6">
            {[
              "Year One Performance Guarantee",
              "MCS Accredited Installation",
              "0% Finance Available",
            ].map((prop) => (
              <div key={prop} className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                {prop}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            onClick={onOpenForm}
            size="lg"
            className="mt-2 h-14 rounded-xl px-10 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
          >
            Free Eligibility Check
          </Button>

          <p className="text-sm text-muted-foreground">
            No obligation · Takes 2 minutes · Completely free
          </p>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-solar-gold text-solar-gold" />
              ))}
            </div>
            <span className="ml-1 text-sm font-semibold text-foreground">4.8/5</span>
            <span className="text-sm text-muted-foreground">on Trustpilot</span>
          </div>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">50,000+</span> systems installed across the UK
          </p>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">6,000+</span> five-star reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
