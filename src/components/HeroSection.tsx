import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.webp";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-12 pt-24 md:pt-36 md:pb-28">
      {/* Background image with overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBanner}
          alt="Solar panel installation"
          className="h-full w-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-solar-green-light px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-3.5 w-3.5 fill-solar-gold text-solar-gold" />
            Solar & Battery Scheme
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Save Up to{" "}
            <span className="text-primary">70%</span> on<br />
            Your Energy Bills
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We've helped over 5,700 families slash their bills. Check if your
            home qualifies in under 2 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          {/* Eligibility criteria */}
          <div className="flex flex-col gap-3 text-left sm:flex-row sm:gap-6">
            {[
              "Homeowner",
              "Staying 3+ Years",
              "£150+ Monthly Bill",
            ].map((prop) => (
              <div key={prop} className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                {prop}
              </div>
            ))}
          </div>

          <Button
            onClick={onOpenForm}
            size="lg"
            className="mt-2 h-14 rounded-xl px-10 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
          >
            Check Eligibility
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
                <Star key={i} className={`h-5 w-5 ${i <= 4 ? "fill-solar-gold text-solar-gold" : "fill-solar-gold/50 text-solar-gold/50"}`} />
              ))}
            </div>
            <span className="ml-1 text-sm font-semibold text-foreground">4.6/5</span>
            <span className="text-sm text-muted-foreground">on Trustpilot</span>
          </div>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">5,700+</span> verified customers
          </p>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">25 Year</span> Warranty
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
