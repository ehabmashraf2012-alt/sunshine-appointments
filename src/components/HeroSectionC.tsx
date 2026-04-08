import { CheckCircle, Clock, Flame, Shield, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionCProps {
  onOpenForm: () => void;
}

const HeroSectionC = ({ onOpenForm }: HeroSectionCProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-12 pt-28 md:pt-40 md:pb-28">
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-xl rounded-xl border border-primary/15 bg-primary/5 px-5 py-3"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-1.5 text-sm font-bold text-destructive">
              <Flame className="h-4 w-4" />
              Demand Is Surging — Limited Slots Available
            </div>
            <p className="text-xs text-muted-foreground">
              Don't miss your chance to speak to our experts while they have availability. Slots are filling up fast.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Attention UK Homeowners!
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Why Are You Still
            <br />
            <span className="text-primary">Renting Your Energy?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Every month, it's another direct debit and another increase you didn't agree to.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          {/* Trust row */}
          <div className="rounded-2xl border border-border bg-muted/30 px-6 py-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Take Control with Solar:
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              {["50,000+ Installations", "Rated 'Excellent'", "Flexible Payments"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  {item}
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
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>This month only · Slots filling fast · Takes 2 minutes</span>
          </div>

          {/* Testimonial quote */}
          <div className="mx-auto max-w-lg text-sm italic text-muted-foreground">
            "I was paying £120 a month for electricity. With solar it's now £0. I've actually made a profit on my panels since installation."
            <br />
            <span className="not-italic font-medium text-foreground">— Richard</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionC;
