import { CheckCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-installers.png";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-12 pt-24 md:pt-36 md:pb-28">
      {/* Background image with overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panel installation"
          className="h-full w-full object-cover opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-solar-green-light px-4 py-1.5 text-sm font-medium text-primary">
            <Trophy className="h-4 w-4" />
            The UK's leading solar installer
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Save Up To{" "}
            <span className="text-primary">70%</span> On<br />
            Your Energy Bills
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Fed up of rising costs? We've helped 50,000+ homeowners reduce their monthly bills with solar and storage
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          {/* Eligibility criteria — green box */}
          <div className="rounded-2xl border border-primary/20 bg-solar-green-light px-6 py-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Free Consultation Includes:
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              {["Installation Costs", "VAT Free Incentives", "Savings Potential"].map((prop) => (
                <div
                  key={prop}
                  className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  {prop}
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={onOpenForm}
            size="lg"
            className="mt-2 h-14 rounded-xl px-10 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
          >
            Free Solar Consultation
          </Button>

          <p className="text-sm text-muted-foreground">
            No obligation - Takes 2 minutes - Quick call back
          </p>

          {/* Join social proof */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              We're Rated <strong className="text-foreground">'Excellent' ★★★★★ Trustpilot</strong> by 6,200+ verified customers. 4.5 Rating.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
