import { CheckCircle, Trophy, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-solar-warm px-4 pb-12 pt-28 md:pt-40 md:pb-28">

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-xl rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-1.5 text-sm font-bold text-destructive">
              <Flame className="h-4 w-4" />
              Limited Consultation Slots Available This Month
            </div>
            <p className="text-xs text-muted-foreground">
              0% VAT on solar installation ends <strong className="text-foreground">31 March 2027</strong>. Act before slots fill up and prices rise.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-solar-green-light px-4 py-1.5 text-sm font-medium text-primary">
            <Trophy className="h-4 w-4" />
            We've Installed 50,000+ Systems
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            The UK's Leading<br />
            <span className="text-primary">Solar Installation Team</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Concerned about pushy salespeople and lies? Speak to our expert team with confidence. No hard sales tactics — ever.
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
              Your Invitation-Only Consultation Includes:
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
            Request Your Invitation
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>This month only · Seats filling fast · Takes 2 minutes</span>
          </div>

          {/* Join social proof */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Join the thousands already saving up to 70%. Rated <strong className="text-foreground">'Excellent' ★★★★★ Trustpilot</strong> by 6,200+ verified customers.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
