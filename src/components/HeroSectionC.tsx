import { CheckCircle, Clock, Flame, Shield, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionCProps {
  onOpenForm: () => void;
}

const HeroSectionC = ({ onOpenForm }: HeroSectionCProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero body */}
      <div className="relative bg-gradient-to-b from-[hsl(45,50%,95%)] to-solar-warm px-4 pb-14 pt-28 md:pt-36 md:pb-24">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-solar-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          {/* Two-column on desktop */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Left: copy */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-destructive/20 bg-destructive/5 px-3.5 py-1.5 text-xs font-bold text-destructive">
                  <Flame className="h-3.5 w-3.5" />
                  Limited Slots This Month — Seats Filling Fast
                </div>
                <br />
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Shield className="h-3.5 w-3.5" />
                  50,000+ Systems Installed
                </div>

                <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Cut Your Energy Costs
                  <br />
                  by up to{" "}
                  <span className="relative inline-block text-primary">
                    70%
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 7 Q25 0 50 4 Q75 8 100 2" stroke="hsl(var(--solar-gold))" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg lg:mx-0">
                  Fed up of rising costs? It's time to take control with the UK's leading solar installer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex flex-col items-center gap-3 lg:items-start"
              >
                <Button
                  onClick={onOpenForm}
                  size="lg"
                  className="group h-14 rounded-xl px-10 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                >
                  Request Your Invitation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  This month only · Seats filling fast · Takes 2 minutes
                </span>
              </motion.div>

              {/* Trustpilot */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2 lg:justify-start"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-solar-gold text-solar-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Rated <strong className="text-foreground">Excellent</strong> by 6,200+ customers
                </span>
              </motion.div>
            </div>

            {/* Right: consultation card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-sm flex-shrink-0"
            >
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Your Invitation Includes
                </div>
                <div className="mb-5 text-sm text-muted-foreground">
                  Everything covered in one free consultation:
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Installation Costs", desc: "Full breakdown with no hidden fees" },
                    { title: "VAT-Free Incentives", desc: "Save thousands before the deadline" },
                    { title: "Savings Potential", desc: "See exactly what you'll save each year" },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{title}</div>
                        <div className="text-xs text-muted-foreground">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-solar-warm px-4 py-3 text-center">
                  <p className="text-xs font-medium text-muted-foreground">
                    🛡️ No hard sales · No obligation · 100% free
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionC;
