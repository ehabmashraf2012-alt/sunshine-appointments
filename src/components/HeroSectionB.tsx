import { CheckCircle, Trophy, Clock, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionBProps {
  onOpenForm: () => void;
}

const HeroSectionB = ({ onOpenForm }: HeroSectionBProps) => {
  return (
    <section className="relative overflow-hidden bg-foreground px-4 pb-16 pt-28 md:pt-40 md:pb-28">
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing accent blob */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Limited Consultations Available This Month
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Save Up to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">70%</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-primary/20 md:h-4" />
            </span>{" "}
            on
            <br />
            Your Energy Bills
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/60 md:text-xl">
            Fed up of rising costs? It's time to take control with the UK's leading solar installer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          {/* CTA Row */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              onClick={onOpenForm}
              size="lg"
              className="h-14 rounded-xl bg-primary px-10 text-lg font-bold shadow-lg shadow-primary/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/40"
            >
              Request Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <span className="flex items-center gap-1.5 text-xs text-primary-foreground/40">
              <Clock className="h-3.5 w-3.5" />
              Takes 2 minutes · No obligation
            </span>
          </div>

          {/* What's included - horizontal pills */}
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {[
              { icon: Zap, label: "Installation Costs" },
              { icon: CheckCircle, label: "VAT Free Incentives" },
              { icon: CheckCircle, label: "Savings Potential" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground/70"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:justify-center sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-solar-gold" />
            <span className="text-sm font-semibold text-primary-foreground/80">
              50,000+ Installs
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-solar-gold text-solar-gold"
                />
              ))}
            </div>
            <span className="text-sm text-primary-foreground/60">
              <strong className="text-primary-foreground/80">Excellent</strong>{" "}
              · 6,200+ reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionB;
